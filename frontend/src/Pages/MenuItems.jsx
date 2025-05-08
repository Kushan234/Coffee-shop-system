import React from 'react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom'

const MenuItems = ({filteredItems}) => {

      const {addToCart, user} = useCart();
      const navigate = useNavigate(); 
      
      const handleAddToCart = (item) => {
        if (!user) {
          alert("Please log in to add items to your cart.");
          navigate("/login"); 
          return;
        }
    
        addToCart(item);
      };
      
      
  return (
    <div className="flex justify-center px-6 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        
      {
      filteredItems.length > 0 ? (
         filteredItems.map((item) => (
                  <div key={item.id || item.name} className="p-4 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
                   <img className="object-cover w-full h-48 rounded-lg" src={`data:image/jpeg;base64,${item.image}`} alt={item.name} />
                    <div className="px-2 mt-4">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <span className="text-lg font-bold text-green-600">${item.price}</span>
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="px-2 py-1 text-xs text-white bg-blue-500 rounded-full">{item.category}</span>
                        
                        <button onClick={()=>handleAddToCart(item)} 
                        className="w-32 h-10 text-white bg-primary rounded-xl hover:bg-secondary">Add to cart</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-lg font-bold text-gray-600">No items available in this category.</p>
              )}
      </div>
    </div>
  );
};

export default MenuItems;
