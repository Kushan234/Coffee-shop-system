import React from "react";
import { useCart } from "../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeCart, saveCartToDB } = useCart();
  const navigate = useNavigate();
  

  const handleCheckout =()=>{
    navigate('/checkout', 
      {state: {cart}}
    );
  }
  return (
    <div className="p-20 text-gray-800 bg-background">
      <div className="grid grid-cols-2 gap-5 mb-10 w-[130%]">
        {/* Left side */}
        <div className="w-full p-5 bg-white rounded-lg shadow-lg">
          <h2 className="mb-3 text-lg font-bold">Cart Items</h2>
          <div className="grid grid-cols-6 p-2 font-semibold bg-gray-100 rounded">
            <p>Item</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={item.id || index} className="grid grid-cols-6 p-2 border-b">
                <img src={`data:image/jpeg;base64,${item.image}`} alt={item.name} className="object-cover w-10 h-10" />
                <p >{item.name}</p>
                <p>${item.price}</p>
                <p>{item.quantity}</p>
                <p>${item.price * item.quantity}</p>
                
                <button onClick={()=>removeCart(item._id)}
                 className="mr-20 text-xl font-bold text-center text-red-500">X</button>
              </div>
            ))
          ) : (
            <p className="mt-5 text-center text-gray-500">Your cart is empty</p>
          )}
        </div>

        {/* Right side */}
      <div className="">
      <div className="p-5 bg-white rounded-lg shadow-lg w-[60%]">
          <h1 className="mb-5 text-xl font-semibold text-center">Cart Total</h1>
          <hr />
          <p className="mt-2 mb-3 text-lg font-semibold ">Sub Total: 
             <span className="ml-24 font-medium ">${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>  </p>
          <hr />
          <p className="mb-3 text-lg font-semibold">Delivery Charges:
             <span className="ml-6 font-medium">$250</span></p>
          <hr />
          <p className="mb-3 text-lg font-semibold">Total Amount:
             <span className="font-medium ml-14">${cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 250}</span></p>

          
             <Link to='/checkout'>
              <button
                onClick={saveCartToDB}
                className="w-full py-2 mt-3 text-white rounded-lg bg-primary hover:bg-secondary"
              >
                Proceed To Checkout
              </button>
            </Link>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
