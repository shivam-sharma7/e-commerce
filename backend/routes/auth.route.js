import express from 'express';

import { signUP, login, logout } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signup', signUP);
router.post('/login', login);
router.post('/logout', logout);

export default router;
