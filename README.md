# ElixirDiVita - E-commerce Platform

![ElixirDiVita](https://img.shields.io/badge/Status-Development-green)
![Vite](https://img.shields.io/badge/Frontend-Vite%20%2B%20React-blue)
![Firebase](https://img.shields.io/badge/Backend-Firebase-orange)
![MercadoPago](https://img.shields.io/badge/Payments-MercadoPago-lightblue)

**ElixirDiVita** es una plataforma de comercio electrónico moderna y robusta diseñada para ofrecer productos de bienestar con una experiencia de usuario premium. El sistema integra un frontend reactivo con una arquitectura de backend serverless y servicios de pago líderes.

---

## Arquitectura del Sistema

### 1. Definición del Problema
La necesidad de una plataforma de ventas digital que no solo exhiba productos, sino que gestione inventarios en tiempo real, procese pagos seguros en Colombia (vía MercadoPago) y proporcione una interfaz de administración sencilla para el dueño del negocio.

### 2. Descomposición Técnica
- **Frontend**: React 18 + TypeScript + Vite para un rendimiento ultrarrápido y tipado fuerte.
- **Backend (Server-side Logic)**: Node.js con Express para la integración de APIs de terceros (MercadoPago).
- **Persistencia y Auth**: Firebase Firestore (Base de datos NoSQL) y Firebase Storage (Imágenes).
- **Estilos**: Styled Components y CSS nativo para un diseño altamente personalizado y dinámico.

### 3. Diseño de la Solución
Se implementó un patrón de arquitectura desacoplado:
- **Client-Side Rendering (CSR)**: Maneja la lógica de carrito, filtrado y visualización.
- **API Proxy**: Un servidor Express dedicado para manejar el `ACCESS_TOKEN` de MercadoPago de forma segura sin exponerlo en el cliente.
- **Service Layer**: Módulos aislados (`firestoreService.ts`) para interactuar con Firebase, facilitando el mantenimiento y las pruebas.

### 4. Análisis de Riesgos y Limitaciones
- **Seguridad**: Se migraron todas las credenciales hardcodeadas a variables de entorno (`.env`) para prevenir fugas de secretos en el control de versiones.
- **Escalabilidad**: El uso de Firebase permite un escalado horizontal automático, aunque se debe monitorear el uso de lecturas/escrituras en Firestore a medida que crezca el tráfico.
- **CORS**: Se configuró un middleware de CORS para permitir la comunicación fluida entre el frontend (Vite) y el backend (Express).

---

## Tecnologías Utilizadas

- **Core**: React, TypeScript, Vite.
- **Navegación**: React Router 6.
- **UI/UX**: React Bootstrap, FontAwesome, Slick Carousel.
- **Backend**: Node.js, Express, Axios.
- **Servicios**: Firebase (Firestore/Storage), MercadoPago SDK.

---

## Configuración del Entorno

Sigue estos pasos para poner en marcha el proyecto localmente:

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd ElixirDiVita
```

### 2. Instalar dependencias
Debes instalar las dependencias tanto en la raíz (frontend) como en la carpeta del servidor.

```bash
# Frontend
npm install

# Backend
cd server
npm install
cd ..
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env.example`:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus credenciales:
```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
# ... (ver .env.example para la lista completa)
```

### 4. Ejecutar el proyecto
Inicia el frontend y el backend en terminales separadas:

**Terminal 1 (Frontend):**
```bash
npm run dev
```

**Terminal 2 (Backend):**
```bash
cd server
node index.js
```

---

## Estructura del Proyecto

```text
ElixirDiVita/
├── src/                # Frontend (React + TS)
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Vistas principales
│   ├── styles/         # Definiciones de estilos
│   └── App.tsx         # Punto de entrada de React
├── server/             # Lógica de Backend (Express + Firebase Service)
│   ├── index.js        # Servidor principal (MercadoPago)
│   ├── firebaseConfig.ts # Configuración de Firebase
│   └── firestoreService.ts # Capa de datos
├── public/             # Activos estáticos
├── .env.example        # Plantilla de variables de entorno
└── vite.config.ts      # Configuración de Vite
```

---

## Mejoras de Seguridad Implementadas

- **Abstracción de Credenciales**: Se eliminaron las claves de API hardcodeadas en `firebaseConfig.ts`.
- **Gestión de Git**: Se actualizó el `.gitignore` para excluir archivos `.env`.
- **Backend Seguro**: El `ACCESS_TOKEN` de MercadoPago ahora se maneja estrictamente en el lado del servidor.

---

## Licencia
Este proyecto es privado para uso de ElixirDiVita.

---
*Desarrollado para ElixirDiVita*
