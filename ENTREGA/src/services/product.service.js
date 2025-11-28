import productModel from "../models/product.model.js"
import { validarId, validarProduct } from "../utils/validations.js";
import { manejoError } from '../utils/manejo.error.js';
import 'dotenv/config';

const productNotFound = process.env.MSG_PRODUCT_NOT_FOUND;
const invalidId = process.env.MSG_INVALID_PRODUCT_ID;
const serverError = process.env.MSG_INTERNAL_SERVER_ERROR;

export const getProducts = async () => {
  const products = await productModel.getProducts();
  if (products) {
    return products;
  } else {
    manejoError(productNotFound, 404, 'NotFoundError');
  }

};

export const addProduct = async (body) => {
  const { value, error } = await validarProduct(body);
  if (error) {
    manejoError(error.details[0].message, 400, 'validationError');
  }
  const product = await productModel.addProduct(value);
  if(product){
    return product;
  }else{
    manejoError(serverError, 503, 'Service Unavailable');
  }
};

export const getProduct = async (idFire) => {
  const { value, error } = await validarId({ id: idFire });
  if (error) {
    manejoError(invalidId, 400, 'validationError');
  }
  const product = await productModel.getProduct(value.id);
  return product;
};

export const updateProduct = async (id, body) => {
    const { value, error } = await validarProduct(body);
    if (error) {
      manejoError(error.details[0].message, 400, 'validationError');
    }
    const updateProduct = await productModel.updateProduct(id, value);
    return updateProduct;
};

export const deleteProduct = async (id) => {
  const product = await productModel.delProduct(id);
  return product;
};

export default {
  getProducts,
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct
};

