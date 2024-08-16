import express from "express";
import bodyParser from "body-parser";
import { MercadoPagoConfig, Preference } from "mercadopago";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

// Configurar middlewares
app.use(cors());
app.use(bodyParser.json());

const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN });

// Endpoint para crear la preferencia
app.post("/create_preference", async (req, res) => {
  const body = {
    items: [
      {
        title: req.body.title,
        quantity: Number(req.body.quantity),
        unit_price: Number(req.body.price),
        currency_id: "COP",
      },
    ],
    back_urls: {
      success: "/success",
      failure: "/failure",
      pending: "/pending",
    },
    auto_return: "approved",
  };
  try {
    const preference = await new Preference(client).create({ body });
    res.json({ redirectUrl: preference.init_point });
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto:", port);
});
