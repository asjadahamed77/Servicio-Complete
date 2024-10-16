import React from "react";
import { categories } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const DemandServices = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col xl:pt-8" id="view-services">
      {/* ------ Headings ------- */}
      <div className="text-center">
        <p className="text-2xl sm:text-3xl font-semibold">
          On-Demand Services at Your Fingertips
        </p>
        <p className="text-secondaryColor">
          Discover top-rated professionals in your area.
        </p>
      </div>
      {/* ----- Display All Categories */}
      <div className="flex  overflow-x-scroll gap-6 my-6 ">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={()=>{navigate(`/browse-services/${item.category}`); window.scrollTo(0,0)}}
            className="overflow-hidden min-w-[250px] min-h-[250px] relative cursor-pointer rounded-lg z-auto hover:scale-105 duration-300 transition-all"
          >
            <img
              src={item.category_image}
              alt="Category"
              className="w-full h-full z-auto "
            />
            <p className="absolute inset-0 flex justify-center items-center text-white text-[22px] font-bold bg-mainColor    bg-opacity-50 ">
              {item.category}
            </p>
          </div>
        ))}
      </div>
      <div onClick={()=>{navigate('/all-services');window.scrollTo(0,0)}} className="flex justify-center">
      <button className="px-10 py-2 border rounded-full max-w-[250px] text-sm flex items-center gap-1 hover:gap-3 duration-300 transition-all">View Services
        <div className="text-mainColor text-sm">
            <FaArrowRight />
        </div>
      </button>
      </div>
    </div>
  );
};

export default DemandServices;
