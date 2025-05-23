import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js'
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
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/api/config/razorpay', (req, res) => res.send({ keyId: process.env.RAZORPAY_KEY_ID }));

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`server is running on port ${port}`));