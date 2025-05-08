import express from 'express'
import { checkout, getAllOders, loginUser, placedOrder, saveCart, signupUser } from '../Controllers/userContrls.js';
import authMiddleware from '../Middleware/authMiddleware.js';


const router = express.Router();

router.post('/signup',signupUser);
router.post('/login', loginUser);

router.post("/save-cart", authMiddleware, saveCart);
router.post("/checkout", authMiddleware, checkout);

router.get('/orders', getAllOders);
router.delete("/orders/:id", placedOrder);

export default router 