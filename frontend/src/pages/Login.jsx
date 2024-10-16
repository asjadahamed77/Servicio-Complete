import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AppContext } from "../context/AppContext";
import { ProviderContext } from "../context/ProviderContext";
import { UserContext } from "../context/userContext";
import { toast } from "react-toastify";
import axios from "axios";
const Login = () => {
  const [state, setState] = useState("Provider");
  const { backendUrl } = useContext(AppContext);
  const { providerToken, setProviderToken } = useContext(ProviderContext);
  const { userToken, setUserToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [providerEmail, setProviderEmail] = useState("");
  const [providerPassword, setProviderPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();
  const onSubmitHanlder = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (state === "Provider") {
        const { data } = await axios.post(`${backendUrl}/api/provider/login`, {
          providerEmail,
          providerPassword,
        });
        if (data.success) {
          localStorage.setItem("providerToken", data.token);
          setProviderToken(data.token);
          toast.success("Provider Logged in Successfully ");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          userEmail,
          userPassword,
        });
        if (data.success) {
          localStorage.setItem("userToken", data.token);
          setUserToken(data.token);
          toast.success("User Logged in  Successfully ");
        } else {
          toast.error(data.message);
        }
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  };
  useEffect(() => {
    if (providerToken) {
      navigate("/");
    }
    if (userToken) {
      navigate("/");
    }
  }, [providerToken, userToken]);
  return loading ? (
    <div className="flex justify-center items-center min-h-screen">
      <BeatLoader color="#212121" size={25} />
    </div>
  ) : (
    <div className="min-h-[80vh] border-t border-mainColor pb-20">
      <form
        onSubmit={onSubmitHanlder}
        className="mx-4  sm:max-w-[500px] bg-white border mt-[60px]  sm:mx-auto py-4 px-3 sm:px-4"
      >
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
          <div>
            <button
              type="submit"
              className="px-6 py-2 bg-mainColor text-white text-sm  mt-4 hover:bg-secondaryColor"
            >
              login
            </button>
          </div>
        </div>
        <div className="text-sm mt-4 font-light text-gray-500">
          <p>
            {state === "Provider"
              ? "Login as a user? "
              : "Login as a provider? "}
            <span
              onClick={() => {
                state === "Provider" ? setState("User") : setState("Provider");
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer font-medium text-blue-700"
            >
              Click here
            </span>
          </p>
          <p>
            Do not have an account?{" "}
            <span
              onClick={() => {
                navigate("/sign-up");
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer font-medium text-blue-700"
            >
              Create Account
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
