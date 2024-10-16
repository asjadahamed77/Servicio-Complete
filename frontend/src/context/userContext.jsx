import { createContext, useState } from "react";
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("userToken")
      ? localStorage.getItem("userToken")
      : false
  );
  

  

  const value = {
    
    
    userToken,
    setUserToken
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
