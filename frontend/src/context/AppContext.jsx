import { createContext, useState } from "react";
import { posts } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [search, setSearch] = useState("");
    
  const value = {
    posts,
    search,
    setSearch,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
