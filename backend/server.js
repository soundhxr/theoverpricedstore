import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT;

connectDB(); // Connect to MongoDB

const app = express();

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 

// cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }))

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`server is running on port ${port}`));