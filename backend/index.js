import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRouter from './Routes/userRoutes.js';
import cors from "cors";
import productsRoutes from './Routes/productRoutes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));


const port = process.env.PORT || 8000

mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>{
    console.log("Connected to the database");
}).catch(()=>{
    console.log("Database connection is fail");
});

app.use('/api/users', userRouter)
app.use("/api/products", productsRoutes)


app.get('/', (req,res)=>{
    res.send("Server is ready")
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
});
