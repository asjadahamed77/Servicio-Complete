import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL
  const [posts,setPosts] = useState([])

  const getAllPosts = async()=>{
    try {
      const {data} = await axios.get(backendUrl+"/api/provider/list-services")
      if(data.success){
        setPosts(data.posts)
      }else{
        toast.error(data.error)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  useEffect(()=>{
    getAllPosts()
  },[posts])

    
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
