import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "./AppContext";
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const { backendUrl } = useContext(AppContext);
  const [userToken, setUserToken] = useState(
    localStorage.getItem("userToken") ? localStorage.getItem("userToken") : false
  );

  const [userData, setUserData] = useState(false);

  const [myProviders,setMyProviders] = useState([])

  const getUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { userToken },
      });
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const [userProvider, setUserProvider] = useState([]);

  const addToMyProvider = async(userId,providerId)=>{
    console.log("Adding Provider:", { userId, providerId });
    try {
      const {data} = await axios.post(backendUrl+'/api/user/add-provider',{userId,providerId},{headers:{userToken}})
      if(data.success){
        setMyProviders((prev) => [...prev, providerId])
        toast.success(data.message)
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }

  

  useEffect(() => {
    if (userToken) {
      getUserProfileData();
    } else {
      setUserData(false);
    }
  }, [userToken]);

  const value = {
    userToken,
    setUserToken,
    getUserProfileData,
    userData,
    setUserData,
    userProvider,
    setUserProvider,
    addToMyProvider
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
