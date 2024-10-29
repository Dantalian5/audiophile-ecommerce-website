import express from 'express';
import {
  getAllProducts,
  getProductByCode,
} from '../controllers/productsController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:code', getProductByCode);

export default router;
