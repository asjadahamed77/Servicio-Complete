import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const RecentPosts = () => {
    const {posts} = useContext(AppContext)
    const navigate = useNavigate()
  return (
    <div className="flex flex-col mt-8">
      {/* ------ Headings ------- */}
      <div className="text-center">
        <p className="text-2xl sm:text-3xl font-semibold">
          Discover Insights, Shared by Our Community
        </p>
        <p className="text-secondaryColor">
          Explore posts and stories from real users across various topics.
        </p>
      </div>
      {/* ------ display Recent Posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {
            posts.slice(0,6).map((item,index)=>(
                <div key={index} className="p-4 border">
                    <div onClick={()=>{window.scrollTo(0,0); navigate(`/${item._id}`)}} className="flex gap-2 items-center cursor-pointer">
                        <img className="w-16 h-16 rounded-full" src={item.provider_image} alt="user" />
                        <div>
                            <p className="font-semibold">{item.provider_name}</p>
                            <p className="text-sm text-secondaryColor">{item.category}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 italic mt-1">{item.post_description}</p>
                        <div className='flex items-center justify-center'>
                <div>
                <FaAngleLeft className='bg-slate-100 text-2xl cursor-pointer hover:text-white hover:bg-mainColor transition-all duration-150 p-1 rounded-full border mr-1' />
                </div>
             {item.images  && <img className="mt-2 w-[90%] " src={item.images[0]} alt="" />} 
             <div>
             <FaAngleRight className='bg-slate-100 text-2xl cursor-pointer hover:text-white hover:bg-mainColor transition-all duration-150 p-1 rounded-full border ml-1'  />
             </div>
             </div>
                    </div>
                    <div className="flex gap-2 mt-2 text-gray-600">
                        <p>{item.date}</p>
                        |
                        <p>{item.time}</p>
                    </div>
                </div>
            ))
        }
      </div>
      <div onClick={()=>{navigate('/all-services');window.scrollTo(0,0)}} className="flex justify-center mt-4">
      <button className="px-10 py-2 border rounded-full max-w-[250px] text-sm flex items-center gap-1 hover:gap-3 duration-300 transition-all">View More
        <div className="text-mainColor text-sm">
            <FaArrowRight />
        </div>
      </button>
      </div>
    </div>
  );
};

export default RecentPosts;
