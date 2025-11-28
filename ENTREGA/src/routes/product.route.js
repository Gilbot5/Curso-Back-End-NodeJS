import express from "express"
import 'dotenv/config';
import {
    getAllProducts,
    addOneProduct,
    getProductById,
    updateProductById,
    deleteProductById
} from "../controllers/product.controller.js";

const products = process.env.PRODUCTS_ROUTE || '/products';
const productId = process.env.PRODUCT_ID_ROUTE || '/products/:id';
const product = process.env.PRODUCT_ROUTE || '/products/create';

const router = express.Router();

router.get(products, getAllProducts);
router.post(product, addOneProduct);
router.get(productId, getProductById);
router.put(productId, updateProductById);
router.delete(productId, deleteProductById);

export default router;