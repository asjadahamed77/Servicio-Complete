import { createContext, useContext, useEffect, useState } from "react";
import review2 from "../assets/Reviews/review (2).jpg";
import { providers } from "../assets/assets";
import axios from "axios";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";
export const ProviderContext = createContext();

const ProviderContextProvider = (props) => {
  const {backendUrl} = useContext(AppContext)
  
  const [providerToken, setProviderToken] = useState(
    localStorage.getItem("providerToken")
      ? localStorage.getItem("providerToken")
      : false
  );
  const [providerData, setProviderData] = useState(false)

  const getProviderProfileData = async()=>{
    try {
      const {data} = await axios.get(`${backendUrl}/api/provider/get-profile`, { headers: { providerToken } });

      if(data.success){
        setProviderData(data.providerData)
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }
  useEffect(()=>{
    if(providerToken){
      getProviderProfileData()
    }
    else{
      setProviderData(false)
    }
  },[providerToken])

    

  const [myProviders, setMyProviders] = useState([]);
  const addProviderToMyList = (provider) => {
    if (!myProviders.find((item) => item._id === provider._id)) {
      setMyProviders([...myProviders, provider]);
    }
  };
  const removeProviderFromMyList = (providerId) => {
    const updatedProviders = myProviders.filter(
      (item) => item._id !== providerId
    );
    setMyProviders(updatedProviders);
  };

  const value = {
    providerData,
    setProviderData,
    providers,
    addProviderToMyList,
    myProviders,
    setMyProviders,
    removeProviderFromMyList,
    providerToken,
    setProviderToken,
    getProviderProfileData,
  };

  return (
    <ProviderContext.Provider value={value}>
      {props.children}
    </ProviderContext.Provider>
  );
};

export default ProviderContextProvider;
