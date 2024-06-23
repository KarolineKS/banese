import express from 'express';
import { login, getRegistersLogins,  updatePasswordNumber } from '../controllers/users.js';

const router = express.Router();

router.post('/login', login);
router.post('/senha', updatePasswordNumber);
router.get('/adm', getRegistersLogins);

export default router;
