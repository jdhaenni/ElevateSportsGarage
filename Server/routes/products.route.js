import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct,deleteProduct } from '../controllers/products.controller.js';
import authenticateUser from '../middleware/authenticateAdmin.js'
const router = express.Router();
router.get('/api/reviews', getProducts)
router.get('/api/reviews/:id', getProductById)
router.post('/api/reviews', authenticateUser, createProduct)
router.put('/api/reviews/:id',authenticateUser,updateProduct)
router.delete('/api/reviews/:id',authenticateUser,deleteProduct)


export default router;
