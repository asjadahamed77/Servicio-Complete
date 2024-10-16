import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { BeatLoader } from "react-spinners";
import {toast} from 'react-toastify'
import { AppContext } from "../context/AppContext";
import { ProviderContext } from "../context/ProviderContext";
import { UserContext } from "../context/userContext";

const SignUp = () => {
  const [state, setState] = useState("Provider");
  const {backendUrl} = useContext(AppContext)
  const {providerToken,setProviderToken} = useContext(ProviderContext)
  const {userToken,setUserToken} = useContext(UserContext)
  const [loading,setLoading] = useState(false)
  const [providerName,setProviderName] = useState("")
  const [providerEmail,setProviderEmail] = useState("")
  const [providerPassword,setProviderPassword] = useState("")
  const [providerPhone,setProviderPhone] = useState("")
  const [userName,setUserName] = useState("")
  const [userEmail,setUserEmail] = useState("")
  const [userPassword,setUserPassword] = useState("")
  const [userPhone,setUserPhone] = useState("")
  const [category,setCategory] = useState('')
  const navigate = useNavigate()
  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    try {
      setLoading(true)
     if ( state === "Provider") {
      const {data} = await axios.post(`${backendUrl}/api/provider/register`,{providerName,providerEmail,providerPassword,providerPhone,category})
      if(data.success){
        localStorage.setItem('providerToken',data.token)
        setProviderToken(data.token)
        toast.success("Account Created Successfully ")
      }
      else{
        toast.error(data.message)
      }
     }else{
      const {data} = await axios.post(`${backendUrl}/api/user/register`,{userName,userEmail,userPassword,userPhone})
      if(data.success){
        localStorage.setItem('userToken',data.token)
        setUserToken(data.token)
        toast.success("Account Created Successfully ")
      }
      else{
        toast.error(data.message)
      }
     }
     setLoading(false)
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }
  useEffect(()=>{
    if(providerToken){
      navigate('/')
    }
    if(userToken){
      navigate('/')
    }
  },[providerToken,userToken])
  return loading? <div className="flex justify-center items-center min-h-screen">
  <BeatLoader color="#212121" size={25} />
</div> : (
    <div className="min-h-[80vh] border-t border-mainColor pb-20">
      <form onSubmit={onSubmitHandler} className="mx-4  sm:max-w-[600px] bg-white border mt-[60px]  sm:mx-auto py-4 px-3 sm:px-4">
        <h1 className="sm:mb-4 mb-2 text-xl font-semibold">
          {state} <span className="text-secondaryColor">Registration</span>
        </h1>
        {/* ---- Form Inputs */}
        <div className="w-full text-secondaryColor font-medium flex flex-col gap-2">
          {/* -- Form Elements */}
          <div className="w-full">
            {state === "Provider" ? (
              <div className="w-full">
                <p>Name:</p>
                <input
                  type="text"
                  placeholder="Provider Name"
                  className="w-full mt-1 p-2 border rounded font-normal"
                  onChange={(e)=>setProviderName(e.target.value)}
                  value={providerName}
                />
              </div>
            ) : (
              <div className="w-full">
                <p>Name:</p>
                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full mt-1 p-2 border rounded font-normal"
                  onChange={(e)=>setUserName(e.target.value)}
                  value={userName}
                />
              </div>
            )}
          </div>
          <div className="w-full">
            {state === "Provider" ? (
              <div className="w-full">
                <p>Email:</p>
                <input
                  type="email"
                  placeholder="provider@gmail.com"
                  className="w-full mt-1 p-2 border rounded font-normal"
                  onChange={(e)=>setProviderEmail(e.target.value)}
                  value={providerEmail}
                />
              </div>
            ) : (
              <div className="w-full">
                <p>Email:</p>
                <input
                  type="email"
                  placeholder="user@gmail.com"
                  className="w-full mt-1 p-2 border rounded font-normal"
                  onChange={(e)=>setUserEmail(e.target.value)}
                  value={userEmail}
                />
              </div>
            )}
          </div>
          <div className="w-full">
            {state === "Provider" ? (
              <div className="w-full">
                <p>Password:</p>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full mt-1 p-2 border rounded font-normal"
                  onChange={(e)=>setProviderPassword(e.target.value)}
                  value={providerPassword}
                  
                />
              </div>
            ) : (
              <div className="w-full">
                <p>Password:</p>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full mt-1 p-2 border rounded font-normal"
                  onChange={(e)=>setUserPassword(e.target.value)}
                  value={userPassword}
                />
              </div>
            )}
          </div>
          <div className="w-full">
            {state === "Provider" ? (
              <div className="w-full">
                <p>Phone:</p>
                <input
                  type="number"
                  placeholder="0761257751"
                  className="w-full mt-1 p-2 border rounded font-normal"
                  onChange={(e)=>setProviderPhone(e.target.value)}
                  value={providerPhone}
                />
              </div>
            ) : (
              <div className="w-full">
                <p>Phone:</p>
                <input
                  type="Number"
                  placeholder="0761257751"
                  className="w-full mt-1 p-2 border rounded font-normal"
                  onChange={(e)=>setUserPhone(e.target.value)}
                  value={userPhone}
                />
              </div>
            )}
          </div>
          <div className="w-full">
            {state === "Provider" ? (
              <div className="w-full">
                <p>Service Category:</p>
                <select onChange={(e)=>setCategory(e.target.value)}
                  value={category} className="w-full p-2 border rounded mt-1">
                  <option value="">Select Service</option>
                  <option value="Carpenters">Carpenters</option>
                  <option value="Cleaners">Cleaners</option>
                  <option value="Dentists">Dentists</option>
                  <option value="Doctors">Doctors</option>
                  <option value="Electricians">Electricians</option>
                  <option value="Event Planners">Event Planners</option>
                  <option value="Graphic Designers">Graphic Designers</option>
                  <option value="HVAC Technicians">HVAC Technicians</option>
                  <option value="Painters">Painters</option>
                  <option value="Photographers">Photographers</option>
                  <option value="Physical Therapists">
                    Physical Therapists
                  </option>
                  <option value="Plumbers">Plumbers</option>
                  <option value="Roofers">Roofers</option>
                  <option value="Tutors">Tutors</option>
                  <option value="Web Developers">Web Developers</option>
                </select>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <button type="submit" className="px-6 py-2 bg-mainColor text-white text-sm  mt-4 hover:bg-secondaryColor">Create Account</button>
          </div>
        </div>
        <div className="text-sm mt-4 font-light text-gray-500">
            <p>{state==="Provider"?'Register as a user? ':'Register as a provider? '}<span onClick={()=>{state==="Provider"?setState("User"):setState("Provider"); window.scrollTo(0,0)}} className="cursor-pointer font-medium text-blue-700">Click here</span></p>
            <p>Already have an account? <span onClick={()=>{navigate('/login');window.scrollTo(0,0)}} className="cursor-pointer font-medium text-blue-700">Login here</span></p>
        </div>
      </form>
      
    </div>
  );
};

export default SignUp;
