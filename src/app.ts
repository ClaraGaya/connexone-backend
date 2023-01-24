import express, { Application } from "express";
import { metricsMiddleware, corsMiddleware } from "./middlewares";
import router from './routes';

const app: Application = express();

// Use prometheus middleware on all routes
app.use(metricsMiddleware);

// Add cors
app.use(corsMiddleware)
app.options('*', corsMiddleware);

// routes
app.use('/', router);


export default app