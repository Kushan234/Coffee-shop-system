import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();

export const useCart =()=> useContext(CartContext);




export const CartProvider = ({ children }) => {
 
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
    }
  }, []);



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
  
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  


  const removeCart = (id) => {
    setCart(prevCart => {
      return prevCart.map(item =>
          item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0); 
    });
  };
  
  

  
  const saveCartToDB = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch("http://localhost:8000/api/users/save-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({ cart }),
      });
      alert("Cart saved to DB!");
    } catch (err) {
      console.error(err);
      alert("Failed to save cart to DB.");
    }
  };
  
  
 

  return (
    <CartContext.Provider value={{  cart, addToCart, removeCart, user, setUser, setCart, saveCartToDB  }}>
      {children}
    </CartContext.Provider>
  );
};
