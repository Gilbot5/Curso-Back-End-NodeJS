import cors from 'cors';
import 'dotenv/config';

const corsConfiguration = {
    origin: process.env.CORS_ORIGIN || '*',
    methods: process.env.CORS_METHODS || ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: process.env.CORS_ALLOWED_HEADERS ? process.env.CORS_ALLOWED_HEADERS.split(',') : ['Content-Type', 'Authorization'],
    exposedHeaders: process.env.CORS_EXPOSED_HEADERS ? process.env.CORS_EXPOSED_HEADERS.split(',') : ['Content-Length'],
    credentials: process.env.CORS_CREDENTIALS || true,
    maxAge: process.env.CORS_MAX_AGE || 600,
    optionsSuccessStatus: process.env.CORS_OPTIONS_SUCCESS_STATUS || 204
};

const corsConfig = cors(corsConfiguration);

export default corsConfig;