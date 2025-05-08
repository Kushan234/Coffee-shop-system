import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../Context/CartContext";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, setCart } = useCart(); 
  const cartItems = cart.length > 0 ? cart : location.state?.cart || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [firstName, lastName, phone, address, city, branch] = [
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value,
      e.target[4].value,
      e.target[5].value,
    ];

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:8000/api/users/checkout",
        {
          firstName,
          lastName,
          phone,
          address,
          city,
          branch,
          cartItems,
        },
        {
          headers: {
             Authorization: `Bearer ${token}` 
            },
        }
      );
      alert("Checkout data saved!");
      setCart([]);
      localStorage.removeItem("cart"); 
      navigate("/success");
    } catch (err) {
      console.error("Checkout failed:", err.response?.data || err.message);
      alert("Checkout failed!");
    }
  };

  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 250);

  return (
    <div className="p-20 text-gray-800 bg-background">
      <div className="grid grid-cols-2">
        <div className="w-[40%] p-5 px-12 bg-white rounded-xl">
          <h1 className="mb-5 mr-4 text-2xl font-bold text-center">Billing Summary</h1>
          {cartItems.length > 0 ? (
            <div className="space-y-3">
              {cartItems.map((item, index) => (
                <div key={index} className="p-4 rounded shadow">
                  <img img src={`data:image/jpeg;base64,${item.image}`} alt={item.name} className="w-32 h-24 mb-2" />
                  <p><span className="mr-2 text-lg font-semibold">Name:</span> {item.name}</p>
                  <p><span className="mr-2 text-lg font-semibold">Price:</span> ${item.price}</p>
                  <p><span className="mr-2 text-lg font-semibold">Quantity:</span> {item.quantity}</p>
                  <p><span className="mr-2 text-lg font-semibold">Total:</span> ${item.price * item.quantity}</p>
                  
                </div>
          
              ))}
              
            </div>
          ) : (
            <p>No items found in cart.</p>
          )}
        </div>

        <div className="w-[140%] -ml-80 bg-white h-[40rem] rounded-xl p-5 px-8">
          <h1 className="mb-5 text-2xl font-bold text-center">Billing Details</h1>
          <hr />

          <form onSubmit={handleSubmit} className="mt-6 rounded-lg">
            <div className="flex py-6 ml-10">
              <input className='px-2 border-2 rounded-md w-96 h-14 outline-4 placeholder:text-gray-500'
                type="text" placeholder='First Name' required />
              <input className='px-2 ml-10 border-2 rounded-md w-96 h-14 outline-4 placeholder:text-gray-500'
                type="text" placeholder='Last Name' required />
            </div>

            <div className="grid ml-10">
              <input className='mb-12 border-2 rounded-md h-14 w-[95%] outline-4 placeholder:text-gray-500 px-2'
                type="number" placeholder='Phone Number' required />

              <textarea className='mb-12 border-2 rounded-md h-16 w-[95%] outline-4 placeholder:text-gray-500 px-2'
                placeholder='Street Address' required />

              <div className="flex mb-10">
                <input className='px-2 border-2 rounded-md w-96 h-14 outline-4 placeholder:text-gray-500'
                  type="text" placeholder='City' required />
                <select required className="px-2 ml-10 border-2 rounded-md w-96 h-14 outline-4 placeholder:text-gray-500">
                  <option value="">Nearest Branch</option>
                  <option value="Galle">Galle</option>
                  <option value="Ambalangoda">Ambalangoda</option>
                  <option value="Mathara">Mathara</option>
                </select>
              </div>

              <button
                className='w-[91%] h-14 bg-primary mt-2 hover:bg-secondary rounded-lg font-semibold text-xl text-text_primary'
                type="submit">
                pay Rs.{grandTotal.toFixed(2)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
