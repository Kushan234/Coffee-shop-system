import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  address: String,
  city: String,
  branch: String,
  cartItems: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = new mongoose.Schema(
  {
  name: String,

  email: { 
    type: String, 
    unique: true 
  },
  password: String,
 
  billingDetails: [billingSchema],
}
);

const User = mongoose.model("User", userSchema);
export default User;
