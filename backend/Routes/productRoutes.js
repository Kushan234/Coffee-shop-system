import express from 'express'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from '../Controllers/productControllers.js'
import multer from 'multer'


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage:storage});

router.post("/addProduct",upload.single("image"),  addProduct);
router.get('/getAllProduct', getAllProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.put('/updateProduct/:id', upload.single("image"), updateProduct );


export default router