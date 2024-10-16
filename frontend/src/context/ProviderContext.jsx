import { createContext, useState } from "react";
import review2 from "../assets/Reviews/review (2).jpg";
import { providers } from "../assets/assets";
export const ProviderContext = createContext();

const ProviderContextProvider = (props) => {
  const [providerToken, setProviderToken] = useState(
    localStorage.getItem("providerToken")
      ? localStorage.getItem("providerToken")
      : false
  );
  const [providerData, setProviderData] = useState([
    {
      provider_name: "Asjad Ahamed",
      provider_image: review2,
      provider_bio:
        "I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.",
      category: "Web Developers",
      provider_email: "asjad2001@icloud.com",
      provider_phone: "761257751",
      available: true,
    },
  ]);

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
    setProviderToken
  };

  return (
    <ProviderContext.Provider value={value}>
      {props.children}
    </ProviderContext.Provider>
  );
};

export default ProviderContextProvider;
