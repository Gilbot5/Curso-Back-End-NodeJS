import { db } from '../configs/fire-base.config.js';
import 'dotenv/config';
import {
  collection,
  doc,
  getDoc
} from 'firebase/firestore';

const baseCollection = process.env.COLLECTION_USERS || 'usuarios';

const usersCollection = collection(db, baseCollection);

// Obtener un usuario por ID de Firestore
export async function getUser(id) {
  const userDoc = await getDoc(doc(usersCollection, id));
  if (userDoc.exists()) {
    return {
      id: userDoc.id,
      ...userDoc.data()
    };
  } else {
    return null;
  }
};

export default {
  getUser
};