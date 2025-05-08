import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ViewProduct = () => {

  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchProducts = async()=>{
      try {
        const res = await fetch("http://localhost:8000/api/products/getAllProduct");
        const data = await res.json();
        setProduct(data);
        
      } catch (error) {
        console.error('Failed to fetch products');
      }
    };
    fetchProducts(); 
  }, []);

  

  const handleEdit = (product)=>{
    navigate('/addProduct', { state: {product} });
  };
  


  const handleDelete = async(id)=>{
    try {
      
      const res = await fetch(`http://localhost:8000/api/products/deleteProduct/${id}`,{
        method:"DELETE",
      });
      
      if (res.ok) {
        setProduct(prev=> prev.filter(item => item._id !== id));
        alert("Product deleted successfully");
      } else {
        alert("failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product", error)
    }
  }
  
  return (
    <div className="p-10 bg-background">
    <h1 className="mb-6 text-3xl font-bold">All Products</h1>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {product.map(product => (
        <div key={product._id} className="p-4 bg-white border rounded-lg shadow">
          <img
            src={`data:image/jpeg;base64,${product.image}`}
            alt={product.name}
            className="object-cover w-full h-40 mb-4 rounded"
          />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="mt-2 font-medium">Category: {product.category}</p>
          <p className="mt-1 text-lg font-bold text-primary">Rs. {product.price}</p>
          <div className="gap-2 mt-2">
          
          <button onClick={()=>{handleEdit(product)}}
           className='h-10 mr-3 text-lg font-semibold text-white rounded-lg m-t-2 w-52 bg-primary'>Edit</button>
          <button onClick={()=> handleDelete(product._id)}
           className='h-10 text-lg font-semibold text-white rounded-lg m-t-2 w-52 bg-primary'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
export default ViewProduct