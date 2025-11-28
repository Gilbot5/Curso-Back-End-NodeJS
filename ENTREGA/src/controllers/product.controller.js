import productService from "../services/product.service.js";
import 'dotenv/config';
import 'dotenv/config';

const productCreated = process.env.MSG_PRODUCT_CREATED;
const productUpdated = process.env.MSG_PRODUCT_UPDATED;
const productDeleted = process.env.MSG_PRODUCT_DELETED;

export const getAllProducts = async (req, res) => {
    const products = await productService.getProducts();
    res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    const product = await productService.getProduct(req.params.id);
    res.status(200).json(product);
};

export const addOneProduct = async (req, res) => {
    const product = await productService.addProduct(req.body);
    res.status(201).json({ product, message: productCreated });
};

export const updateProductById = async (req, res) => {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json({ product, message: productUpdated });
};

export const deleteProductById = async (req, res) => {
    const product = await productService.deleteProduct(req.params.id);
    res.status(200).json({ product, message: productDeleted });
};