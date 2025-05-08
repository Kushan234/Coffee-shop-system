import Product from "../Models/productModels.js";

export const addProduct = async(req,res)=>{
    try {
        
        const { name, description, price, category} = req.body;

        const image = req.file ? req.file.buffer.toString("base64") :  "";

        const newProduct = new Product ({
            name,
            description,
            price,
            category,
            image,
        });

        await newProduct.save();
        res.status(200).json({message: "Product added succesfully", Product: newProduct})
    } catch (error) {
        res.status(400).json({message:"Server error",error})
    }
};


export const getAllProduct = async (req,res)=>{
    try {
        const product = await Product.find();
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({message: "failed to fetch products",err})
    }
}


export const deleteProduct = async(req, res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: "failed to delete product", error})
    }
} 

export const updateProduct = async (req,res)=>{
    try {
        
        const { name, description, price, category } = req.body;
        const image = req.file ? req.file.buffer.toString("base64") : null;
    
        const updateData = { name, description, price, category };
        if (image) updateData.image = image;
    
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          updateData,
          { new: true }
        );
    
        res.status(200).json({ message: "Product updated", updatedProduct });

        
    } catch (error) {
        res.status(500).json({message: "Failed to update product"})
    }
}