import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginSignUp = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    
    const validUser = {
      name: "admin",
      password: "12345"
    }

    const handleLogin = (e) =>{
      e.preventDefault();
    
    if(name === validUser.name && password === validUser.password ){
      localStorage.setItem("isAuthenticated", true);
      Navigate('/dashboard');
    }else{
      alert("Invalid credentials ")
    }
      
    };

    
  return (
    <div className="p-24 px-96 bg-background">
    <form onSubmit={handleLogin}>
      <div className="w-[35rem] h-[33rem] bg-white items-center justify-center mt-14 ml-28 py-20 rounded-xl text-center">
        <h2 className="mb-10 text-3xl font-semibold text-primary">
          Login
        </h2>

        <div className="grid gap-5 px-4 mb-3">
         
            <input
              className="w-full px-2 placeholder-gray-500 border-2 rounded-md outline-none h-14"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              
            />
    
         
          <input
            className="w-full px-2 placeholder-gray-500 border-2 rounded-md outline-none h-14"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
          />

          
          <button type='submit'
            className="w-full mt-5 text-lg font-semibold text-white rounded-lg cursor-pointer h-14 bg-primary"
          >
           Login
          </button>
         

        </div>

        
      </div>
    </form>
  </div>
);
};


export default LoginSignUp