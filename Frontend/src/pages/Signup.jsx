import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import axios from "axios"

const Signup = () => {
  let [show, setShow] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err,setErr] = useState("")
  let [loading,setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      let result = await axios.post(serverUrl + "/api/user/signup", {
        firstName,
        lastName,
        userName,
        email,
        password
      },{withCredentials:true});
      setLoading(false)
      setFirstName("")
      setLastName("")
      setUserName("")
      setEmail("")
      setPassword("")
      setErr("")
    } catch (error) {
      setLoading(false)
      setErr(error.response.data.message) 
    }
  };

  return (
    <div className="w-full h-screen bg-[white] flex flex-col items-center justify-start gap-[10px]">
      <div className="p-[35px] w-full flex items-center">
        <img src={logo} alt="" className="w-28 h-auto" />
      </div>
      <form className="w-[90%] max-w-[400px] md:shadow-xl flex flex-col justify-center gap-[20px] p-[15px]" onSubmit={handleSignup}>
        <h1 className="text-gray-800 text-[30px] font-semibold mb-[30px]">
          Signup
        </h1>

        <input
          type="text"
          placeholder="FirstName"
          required
          className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded focus:outline-none focus:placeholder-transparent transition-all duration-200"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="LastName"
          required
          className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded focus:outline-none focus:placeholder-transparent transition-all duration-200"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
          placeholder="UserName"
          required
          className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded focus:outline-none focus:placeholder-transparent transition-all duration-200"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded focus:outline-none focus:placeholder-transparent transition-all duration-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="border-2 border-gray-600 text-gray-800 text-[18px] px-[12px] py-[10px] rounded relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full bg-transparent outline-none border-none focus:placeholder-transparent transition-all duration-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-3 text-[#0A66C2] cursor-pointer"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? "Hidden" : "Show"}
          </span>
        </div>
        {err && <p className="text-center text-red-500 ">
            {err}
          </p>}
        <button className="bg-[#0A66C2] text-white py-[10px] text-[18px] rounded-full focus:outline-none mt-5"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <p
          onClick={() => navigate("/login")}
          className="text-center curser cursor-pointer"
        >
          Already have an account ?{" "}
          <span className="text-[#0A66C2] cursor-pointer">Sign In</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
