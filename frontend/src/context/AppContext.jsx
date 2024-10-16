import { createContext, useState } from "react";
import { posts } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL
  console.log("Backend URL: ", backendUrl);
    
  const value = {
    posts,
    search,
    setSearch,
    backendUrl,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
