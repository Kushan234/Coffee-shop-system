import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const LoginSignup = () => {
  
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { setUser, cart } = useCart();
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const url = isSignup
      ? "http://localhost:8000/api/users/signup"
      : "http://localhost:8000/api/users/login";
    const response = await axios.post(url, form);

    alert(response.data.message);

    if (isSignup) {
      setIsSignup(false);
    } else {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user)); 
      setUser(response.data.user);
      navigate("/"); 
    };

    
      } catch (error) {
        alert(error.response?.data?.message || "Something went wrong");
      }};

  return (
    <div className="p-24 px-96 bg-background">
      <form onSubmit={handleSubmit}>
        <div className="w-[35rem] h-[33rem] bg-white items-center justify-center ml-28 py-14 rounded-xl text-center">
          <h2 className="py-5 text-3xl font-semibold text-primary">
            {isSignup ? "Sign Up" : "Log In"}
          </h2>

          <div className="grid gap-5 px-4 mb-3">
            {isSignup && (
              <input
                className="w-full px-2 placeholder-gray-500 border-2 rounded-md outline-none h-14"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
            )}
            <input
              className="w-full px-2 placeholder-gray-500 border-2 rounded-md outline-none h-14"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            <input
              className="w-full px-2 placeholder-gray-500 border-2 rounded-md outline-none h-14"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={handleChange}
            />

            <button
              className="w-full mt-2 text-lg font-semibold text-white rounded-lg cursor-pointer h-14 bg-primary hover:bg-secondary"
            >
              {isSignup ? "Sign Up" : "Log In"}
            </button>
          </div>

          <p className="px-5 mb-2 text-gray-700 cursor-pointer text-md">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <span
              onClick={() => setIsSignup(!isSignup)}
              className="ml-1 font-bold text-primary"
            >
              {isSignup ? "Login here" : "Sign up here"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
