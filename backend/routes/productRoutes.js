import express from 'express';

const router = express.Router();
import { getProductById, getProducts, createProduct, updateProduct, deleteProduct, createProductReview, getTopProducts } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id/reviews').post(protect, createProductReview);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);

export default router;