import express from "express";
import process from "process";
import { authentication } from './src/middlewares/authentication.js';
import productRouter from './src/routes/product.route.js';
import authRouter from './src/routes/auth.route.js';
import corsConfig from './src/configs/cors.config.js';
import errorHandler from './src/middlewares/error.handler.js';

// Variables:
const PORT = process.env.PORT || 3000;
const api = process.env.API || '/api';
const auth = process.env.AUTH || '/auth';
const SERVER_INIT = process.env.SERVER_INIT || 'Servidor iniciado...';

const app = express();

// JSON request:
app.use(express.json());

// Cors:
app.use(corsConfig);

// Rutas:
app.use(auth, authRouter);

// Authentication: 
app.use(authentication);

app.use(api, productRouter);

// Error handler
app.use(errorHandler);

//Iniciar Server:
app.listen(PORT, () => console.log(`${SERVER_INIT}:${PORT}`));