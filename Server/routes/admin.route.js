import express from 'express';
import { adminLoginFunction } from '../controllers/loginAdmin.controller.js';
import { createAdmin } from '../controllers/createAdmin.controller.js';

const router = express.Router();

router.post('/api/admin', adminLoginFunction);
router.post('/api/admin/new', createAdmin);

export default router;
