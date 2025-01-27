import express from 'express';
import { adminLoginFunction } from '../controllers/loginAdmin.controller.js';

const router = express.Router();

router.post('/', adminLoginFunction);

export default router;
