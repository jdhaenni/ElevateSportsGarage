import express from 'express';
import { createAdmin } from '../controllers/createAdmin.controller.js';

const router = express.Router();

router.post('/', createAdmin);

export default router;
