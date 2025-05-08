import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/users/orders");
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, []);


  const handlePlacedOrder = async(orderId, customerName)=>{
    try {
      
      alert( `Placed ${customerName}'s Order`);
      
      await axios.delete(`http://localhost:8000/api/users/orders/${orderId}`);
      setOrders((prevOrders) => prevOrders.filter(order => order._id !== orderId));
      alert("Order successfully removed");
      
    } catch (error) {
      console.error("Failed to delete order", error);
      alert("Failed to delete order");
    }
  }

  return (
    <div className="p-16 bg-background">
      <h1 className="mb-6 text-3xl font-bold">All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="p-6 bg-white border rounded-md shadow">
              <h2 className="mb-2 text-xl font-semibold">Customer: {order.name} ({order.email})</h2>
              <p><strong>Address:</strong> {order.address}, {order.city}</p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Branch:</strong> {order.branch}</p>
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>

              <div className="mt-4">
                <h3 className="font-bold">Items:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {order.cartItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-2 border rounded">
                      <img src={`data:image/jpeg;base64,${item.image}`} alt={item.name} className="object-cover w-20 h-16" />
                      <div>
                        <p><strong>{item.name}</strong></p>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Sub Total: ${item.price * item.quantity}</p>
                        
                      </div>
                    </div>
                    
                  ))}
                </div>
               <div className="flex gap-8 mt-2">
               <p className='py-4 text-lg font-semibold text-center text-white rounded-lg bg-primary w-72 h-14' >Grand Total: ${order.cartItems.reduce((sum, item) => sum + item.price * item.quantity , 0).toFixed(2)}</p>
               
               <button onClick={()=>handlePlacedOrder(order._id, order.name)} 
               className='text-lg font-semibold text-white rounded-lg bg-primary w-72 h-14'>Placed Order</button>
               </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
