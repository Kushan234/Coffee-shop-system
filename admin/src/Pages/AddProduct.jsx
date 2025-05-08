import React, { useEffect, useState } from 'react'
import upload_area from '../assets/upload_area.svg'
import { useLocation } from 'react-router-dom'


const AddProduct = () => {


  const location = useLocation();
  const editData = location.state?.product;
  
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });


  useEffect(()=>{
    if(editData){
      setProduct({
        name: editData.name,
        description: editData.description,
        price: editData.price,
        category: editData.category,
        image: editData.image, 
        _id: editData._id,
      });
    }
  }, [editData]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };
  

  const handleImageChange = (e) => {
    setProduct(prev => ({ ...prev, image: e.target.files[0] }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(product).forEach(key => {
     if(key !== "_id" && key !=="image"){
       formData.append(key, product[key]);
     }
    });

    if (product.image instanceof File) {
      formData.append("image", product.image);
    }  

    try {
      const url = product._id 
      ? `http://localhost:8000/api/products/updateProduct/${product._id}` 
      : `http://localhost:8000/api/products/addProduct`;

    const method = product._id ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      body: formData,
    });

      const data = await res.json();
      
      if (res.ok) {
        alert(product._id ? "Product updated successfully!" : "Product added successfully!");
        setProduct({ name: "", description: "", price: "", category: "", image: null });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Error while submitting the form");
      console.error(err);
    }
  };
  
  

  return (
    <div className="p-16 bg-background">
      <div className="">
        <h1 className="mb-6 text-3xl font-bold">Add Product</h1>

        <form onSubmit={handleSubmit} className="grid p-10 bg-white border rounded-md shadow">
          <p className='mb-3 text-lg font-semibold'>Item Name</p>
          <input name="name" value={product.name} onChange={handleChange} className='mb-10 border-2 rounded-md h-14 w-[60%] px-2' type="text" placeholder='Item name' />

          <p className='mb-3 text-lg font-semibold'>Item Description</p>
          <textarea name="description" value={product.description} onChange={handleChange} className='mb-10 border-2 rounded-md h-20 w-[60%] px-2' placeholder='Description'></textarea>

          <div className="flex-1">
            <p className='mb-3 text-lg font-semibold'>Item Price</p>
            <input name="price" value={product.price} onChange={handleChange} className='mb-10 border-2 rounded-md h-14 w-[30%] px-2' type="number" placeholder='Item price' />

            <p className='mb-3 text-lg font-semibold'>Item Category</p>
            <select name="category" value={product.category} onChange={handleChange} className='mb-10 border-2 rounded-md h-14 w-[30%] px-2'>
              <option value="">Select</option>
              <option value="Coffee-Drinks">Coffee-Drinks</option>
              <option value="Tea & Non-Coffee">Tea & Non-Coffee</option>
              <option value="Specialty Drinks">Specialty Drinks</option>
              <option value="Pastries & Snacks">Pastries & Snacks</option>
              <option value="Light Meals">Light Meals</option>
            </select>
          </div>

          <div className="mb-10">
            <p className='mb-5 text-lg font-semibold'>Upload Image</p>
            <label htmlFor='file-input'>
            <img
            className='object-cover w-40 h-40 border cursor-pointer'
              src={
                product.image instanceof File
                ? URL.createObjectURL(product.image)
                : product.image
                  ? `data:image/jpeg;base64,${product.image}`
                  : upload_area
              }
              alt="Preview"
            />
            </label>
            <input type="file" id="file-input" name="image" onChange={handleImageChange} hidden />
          </div>

          <button type="submit" className='w-[91%] h-14 bg-primary mt-2 rounded-lg font-semibold text-lg text-white'>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
