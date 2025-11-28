import { generateToken } from '../utils/token.generator.js';
import authService from "../services/auth.service.js";
import { validarUser } from '../utils/validations.js';
import { manejoError } from '../utils/manejo.error.js';
import 'dotenv/config';

const unauthorized = process.env.MSG_UNAUTHORIZED;

const default_user = {
  id: "1",
  email: "test@gmail.com",
  password: "123456"
}

export const getUserById = async (req, res) => {
  const { value, error } = await validarUser(req.body);
  if (error) {
    manejoError(error.details[0].message, 400, 'validationError');
  }
  const { email, password } = value;
  const userData = await authService.getUser(String(value.id));
  if (userData) {
    if (email === userData.email && password === userData.password) {
      return userData;
    }
  }
};

export async function login(req, res) {
  // Verificar credenciales del usuario de Firebase
  const usuario = await getUserById(req);
  if (usuario) {
    const user = { email: usuario.email, id: usuario.id };
    const token = generateToken(user);
    res.json({
      id: user.id,
      email: user.email,
      token
    });
  } else {
    res.status(401).json({ message: unauthorized });
  }
}