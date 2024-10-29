import express from 'express';
import { cartValidation } from '../controllers/cartController.js';

const router = express.Router();

router.post('/', cartValidation);

export default router;
