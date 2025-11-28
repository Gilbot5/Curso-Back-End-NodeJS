import 'dotenv/config';

const serverError = process.env.MSG_INTERNAL_SERVER_ERROR;

export default function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const payload = {
        mensaje: err.message || serverError,
        tipo: err.name || 'Error',
        fecha: new Date().toISOString().slice(0, 10),
        hora: new Date().toLocaleTimeString('es-AR', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })
    };
    return res.status(status).json(payload);
};