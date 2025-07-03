import React, { useState } from "react";
import logo from "../assets/logo.svg";
import {useNavigate} from "react-router-dom"

const Signup = () => {
   let [show,setShow] = useState(false)
   const navigate = useNavigate()
  return (
    <div className="w-full h-screen bg-[white] flex flex-col items-center justify-start gap-[10px]">
      <div className="p-[35px] w-full flex items-center">
        <img src={logo} alt="" className="w-28 h-auto" />
      </div>
      <form className="w-[90%] max-w-[400px] md:shadow-xl flex flex-col justify-center gap-[20px] p-[15px]">
        <h1 className="text-gray-800 text-[30px] font-semibold mb-[30px]">
          Signup
        </h1>

        <input
          type="text"
          placeholder="FirstName"
          required
          className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded focus:outline-none focus:placeholder-transparent transition-all duration-200"
        />

        <input
          type="text"
          placeholder="LastName"
          required
          className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded focus:outline-none focus:placeholder-transparent transition-all duration-200"
        />

        <input
          type="text"
          placeholder="UserName"
          required
          className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded focus:outline-none focus:placeholder-transparent transition-all duration-200"
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded focus:outline-none focus:placeholder-transparent transition-all duration-200"
        />
        <div className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded relative">
          <input
            type={show?"text":"password"}
            placeholder="Password"
            required
            className="w-full bg-transparent outline-none border-none focus:placeholder-transparent transition-all duration-200"
          />
          <span className="absolute right-3 text-[#0A66C2] cursor-pointer"  onClick={()=>{
            setShow(!show)
          }}>{show?"Hidden":"Show"}</span>
        </div>

        <button className="bg-[#0A66C2] text-white py-[10px] text-[18px] rounded-full focus:outline-none mt-5">
          Sign Up
        </button>
        <p className="text-center" >Already have an account ? <span className="text-[#0A66C2] cursor-pointer" onClick={()=>navigate("/login")}>Sign In</span></p>
      </form>
    </div>
  );
};

export default Signup;
