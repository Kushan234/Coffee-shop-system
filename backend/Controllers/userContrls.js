import bcrypt from 'bcrypt'
import user from '../Models/userModels.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

          
dotenv.config();

export const signupUser = async (req, res) => {
    try {
      console.log(req.body); 
      
      const { name, email, password } = req.body;

      const userExists = await user.findOne({ email });

      if (userExists) 
        return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 10);  //10 is salting cound - number of times password hashing
  
      const newUser = new user({ name, email, password: hashedPassword, cart: [] });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully!" });

      
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  

  export const loginUser = async (req, res) => {
    try {
      console.log(req.body);
      const { email, password } = req.body;
  
      const foundUser = await user.findOne({ email });

      if (!foundUser)
         return res.status(400).json({ message: "Invalid credentials" });
  
      const isMatch = await bcrypt.compare(password, foundUser.password);

      if (!isMatch)
         return res.status(400).json({ message: "Check email or password" });
  
      const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
     
      res.status(200).json({ 
        message: "Login successful", 
        token,
        user: {
          id: foundUser._id,
          name: foundUser.name,
          email: foundUser.email,
          cart: foundUser.cart, 
        } 
      });
  
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  

    
  export const saveCart = async (req, res) => {
    console.log("Saving cart for user:", req.user?._id);
    const { cart } = req.body;
    try {
      const foundUser = await user.findById(req.user._id);
      if (!foundUser) return res.status(404).json({ message: "User not found" });
  
      foundUser.cart = cart;
      await foundUser.save();
  
      res.status(200).json({ message: "Cart saved!" });
    } catch (error) {
      console.error("Cart save error:", error);
      res.status(500).json({ message: "Failed to save cart." });
    }
  };




  export const checkout = async (req, res) => {
    const { firstName, lastName, phone, address, city, branch, cartItems } = req.body;
    try {
      const foundUser = await user.findById(req.user._id);
      if (!foundUser) return res.status(404).json({ message: "User not found" });
  
      foundUser.billingDetails.push({
        firstName,
        lastName,
        phone,
        address,
        city,
        branch,
        cartItems,
      });
  
      foundUser.cart = [];
      await foundUser.save();
      res.status(200).json({ message: "Checkout successful!" });
    } catch (error) {
      console.error("Checkout error:", error);
      res.status(500).json({ message: "Checkout failed." });
    }
  };
  


  export const getAllOders = async(req,res)=>{
    try {

      const users = await user.find({}, "name email billingDetails").lean();

      const allOders = users.flatMap(u=> (u.billingDetails || []).map(Order =>({
        userId: u._id,
        name: u.name,
        email: u.email,
        ...Order,
      })));

      res.status(200).json(allOders)
      
    } catch (error) {
      console.error("Error fetching orders", error)
      res.status(500).json({message: "failed to fetch orders"})
    }
  };


  export const placedOrder = async (req, res) => {
    const orderId = req.params.id;
  
    try {
      const userDetails = await user.findOne({ "billingDetails._id": orderId });
  
      if (!userDetails) {
        return res.status(404).json({ message: "Order not found" });
      }
  
   
      userDetails.billingDetails = userDetails.billingDetails.filter(
        (order) => order._id.toString() !== orderId
      );
  
      await userDetails.save();
  
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      console.error("Order delete failed", error);
      res.status(500).json({ message: "Failed to delete order" });
    }
  };
  