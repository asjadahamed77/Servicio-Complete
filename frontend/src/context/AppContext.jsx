import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL
  const [posts,setPosts] = useState([])
  const [reviews,setReviews] = useState([])
 

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

  const getAllReviews = async()=>{
    try {
      const {data} = await axios.get(backendUrl+'/api/user/list-reviews')
      if(data.success){
        setReviews(data.reviews)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  useEffect(()=>{
    getAllPosts()
  },[posts])
  useEffect(()=>{
    getAllReviews()
  },[reviews])

    
  const value = {
    posts,
    search,
    setSearch,
    backendUrl,
    reviews,setReviews,getAllReviews
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
