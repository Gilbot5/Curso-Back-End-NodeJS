import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY || 'secret';
const expire = process.env.JWT_EXPIRES_IN || '1h';

// Función para generar un token JWT
export const generateToken = (userData) => {
    const user = {id: userData.id, email: userData.email};
    const expiration = { expiresIn: expire };
    const token = jwt.sign(user, secret_key, expiration);
    return token;
}