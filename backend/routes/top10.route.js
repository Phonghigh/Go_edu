import express from 'express';
import { getTop10 } from '../controllers/top10.controller.js';

const router = express.Router();

router.get('/', getTop10);

export default router;
