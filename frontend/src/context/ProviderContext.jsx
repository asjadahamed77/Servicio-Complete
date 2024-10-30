import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";
export const ProviderContext = createContext();

const ProviderContextProvider = (props) => {
  const { backendUrl } = useContext(AppContext);

  const [providerToken, setProviderToken] = useState(
    localStorage.getItem("providerToken")
      ? localStorage.getItem("providerToken")
      : false
  );
  const [providerData, setProviderData] = useState(false);
  const [providers, setProviders] = useState([]);
  const getProviderProfileData = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/provider/get-profile`,
        { headers: { providerToken } }
      );

      if (data.success) {
        setProviderData(data.providerData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  // List all providers
  const listProviders = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/provider/list");
      if (data.success) {
        setProviders(data.providers);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    listProviders();
  }, [providers]);

  useEffect(() => {
    if (providerToken) {
      getProviderProfileData();
    } else {
      setProviderData(false);
    }
  }, [providerToken]);

  
  

  const value = {
    providerData,
    setProviderData,
    providers,
    setProviders,
  
    providerToken,
    setProviderToken,
    getProviderProfileData,
    listProviders,
  };

  return (
    <ProviderContext.Provider value={value}>
      {props.children}
    </ProviderContext.Provider>
  );
};

export default ProviderContextProvider;
