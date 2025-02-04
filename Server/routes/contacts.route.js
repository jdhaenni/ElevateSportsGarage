import express from 'express';
import { postContact,deleteContact } from '../controllers/contact.controller.js';
import authenticateUser from '../middleware/authenticateAdmin.js';


const router = express.Router();

router.post('/api/contact', postContact);
router.post('/api/contact/:id',authenticateUser, deleteContact);


export default router;
