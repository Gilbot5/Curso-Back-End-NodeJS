  import express from 'express'; 
  import 'dotenv/config';
  import { login } from '../controllers/auth.controller.js'; 
 
  const auth = process.env.LOGIN_ROUTE || '/login';

  const router = express.Router();

  router.post(auth, login);
 
  export default router;