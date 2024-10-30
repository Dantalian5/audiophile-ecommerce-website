import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import productsRoutes from './routes/productsRoute.js';
import cartRoutes from './routes/cartRoute.js';
import checkoutRoutes from './routes/checkoutRoute.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
// Configuración de rutas
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);

export default app;
