import express from "express";
import bodyParser from "body-parser";
import { MercadoPagoConfig, Preference } from "mercadopago";
import cors from "cors";

// Configuración de Mercadopago
const client = new MercadoPagoConfig({
  access_token:
    "APP_USR-7100088873869175-071811-241c5ded4bb43ada0ffdc7f55b4725aa-564802600",
});
const preference = new Preference(client);
const app = express();
const port = 3000;

// Configurar middlewares
app.use(cors());
app.use(bodyParser.json());

// Endpoint para crear la preferencia
app.post("/create_preference", async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: req.body.title,
          unit_price: req.body.unit_price,
          quantity: req.body.quantity,
        },
      ],
      back_urls: {
        success: "http://www.tusitio.com/success",
        failure: "http://www.tusitio.com/failure",
        pending: "http://www.tusitio.com/pending",
      },
      auto_return: "approved",
    };

    const response = await preference.create(preference);
    res.json({
      id: response.body.id,
    });
  } catch (error) {
    console.error("Error creating preference:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
