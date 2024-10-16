import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from 'react-spinners';

const Login = () => {
    const [state, setState] = useState("Provider");
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const onSubmitHanlder = async(e)=>{
      e.preventDefault()
      setLoading(true)
    }
  return (
    <div className="min-h-[80vh] border-t border-mainColor pb-20">
      <form onSubmit={onSubmitHanlder} className="mx-4  sm:max-w-[500px] bg-white border mt-[60px]  sm:mx-auto py-4 px-3 sm:px-4">
      <h1 className="sm:mb-4 mb-2 text-xl font-semibold">
          {state} <span className="text-secondaryColor">Login</span>
        </h1>
        {/* ---- Form Inputs */}
        <div className="w-full text-secondaryColor font-medium flex flex-col gap-2">
             {/* -- Form Elements */}
          <div className="w-full">
            {state === "Provider" ? (
              <div className="w-full">
                <p>Email:</p>
                <input
                  type="email"
                  placeholder="provider@gmail.com"
                  className="w-full mt-1 p-2 border rounded font-normal"
                />
              </div>
            ) : (
              <div className="w-full">
                <p>Email:</p>
                <input
                  type="email"
                  placeholder="user@gmail.com"
                  className="w-full mt-1 p-2 border rounded font-normal"
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
                />
              </div>
            ) : (
              <div className="w-full">
                <p>Password:</p>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full mt-1 p-2 border rounded font-normal"
                />
              </div>
            )}
          </div>
          <div>
            <button type="submit" className="px-6 py-2 bg-mainColor text-white text-sm  mt-4 hover:bg-secondaryColor">login</button>
          </div>

        </div>
        <div className="text-sm mt-4 font-light text-gray-500">
            <p>{state==="Provider"?'Login as a user? ':'Login as a provider? '}<span onClick={()=>{state==="Provider"?setState("User"):setState("Provider"); window.scrollTo(0,0)}} className="cursor-pointer font-medium text-blue-700">Click here</span></p>
            <p>Do not have an account? <span onClick={()=>{navigate('/sign-up');window.scrollTo(0,0)}} className="cursor-pointer font-medium text-blue-700">Create Account</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login
