import jwt from 'jsonwebtoken';
import 'dotenv/config';

const forbidden = process.env.MSG_FORBIDDEN;
const unauthorized = process.env.MSG_UNAUTHORIZED;
const secret_key = process.env.JWT_SECRET_KEY || 'secret';

// Middleware para verificar el token JWT 
export const authentication = (req, res, next) => {

    if(!req.headers['authorization']){
        return res.status(401).json({ message: unauthorized });
    }
    
    const token = req.headers['authorization'].split(" ")[1];
    if (!token) return res.status(401).json({ message: unauthorized });
    jwt.verify(token, secret_key, (err) => {
        if (err) return res.status(403).json({ message: forbidden });
        next();
    });
} 