import { db } from '../configs/fire-base.config.js';
import 'dotenv/config';
import {
  collection, doc,
  getDocs, getDoc, addDoc, deleteDoc, updateDoc
} from 'firebase/firestore';
import { manejoError } from '../utils/manejo.error.js';
import 'dotenv/config';

const productNotFound = process.env.MSG_PRODUCT_NOT_FOUND;
const baseDatos = process.env.COLLECTION_PRODUCTS || 'productos';

const productsCollection = collection(db, baseDatos);

// Obtener todos los productos de Firestore - OK
export async function getProducts() {
  const querySnapshot = await getDocs(productsCollection);
  const productsDoc = [];
  querySnapshot.forEach((doc) => {
    //productsDoc.push({ id: doc.id, ...doc.data() });
    productsDoc.push({
      id: doc.id,
      nombre: doc.data().nombre,
      precio: doc.data().precio,
      categoria: doc.data().categoria
    });
  });
  return productsDoc;
};

// Obtener un producto por ID de Firestore - OK
export async function getProduct(id) {
  const productDoc = await getDoc(doc(productsCollection, id));
  if (productDoc.exists()) {
    return {
      id: productDoc.id,
      nombre: productDoc.data().nombre,
      precio: productDoc.data().precio,
      categoria: productDoc.data().categoria
    };
  } else {
    manejoError(productNotFound, 404, 'NotFoundError');
  }
};

// Eliminar un producto por ID de Firestore - OK
export async function delProduct(id) {
  const productDoc = await getProduct(id);
  if (productDoc) {
    await deleteDoc(doc(productsCollection, id));
    return productDoc;
  }
};

// Agregar un producto en Firestore - OK
export async function addProduct(product) {
  await addDoc(productsCollection, product);
  return product;
};

// Actualizar un producto en Firestore
export async function updateProduct(id, product) {
  const productExist = await getProduct(id);
  if (productExist) {
    const productDoc = doc(productsCollection, id);
    await updateDoc(productDoc, product);
    return product;
  }
};

export default {
  getProducts,
  addProduct,
  updateProduct,
  getProduct,
  delProduct
};