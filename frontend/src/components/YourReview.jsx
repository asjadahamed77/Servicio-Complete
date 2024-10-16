import React, { useState } from 'react';
import review from '../assets/review-img.png';

const YourReview = () => {
  const [image, setImage] = useState(null); 

  const handleImage = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      setImage(URL.createObjectURL(file)); 
    }
  };

  return (
    <div className='flex flex-col items-center mt-12 pb-12'>
      {/* ------ Headings ------- */}
      <div className="text-center">
        <p className="text-2xl sm:text-3xl font-semibold">
          Share Your Experience, Help Others Hire with Confidence
        </p>
        <p className="text-secondaryColor">
          Your feedback matters! Upload your review and let future users know about the quality service you received.
        </p>
      </div>
      {/* ----- Send Your Review Container ------- */}
      <form className='flex flex-col sm:w-[500px] w-[350px] mt-12 bg-white px-4 py-8 gap-4 border rounded'>
        <label htmlFor='image' className='flex items-center gap-1'>
          <img 
            className='w-16 h-16 rounded-full border-2 cursor-pointer border-mainColor p-1' 
            src={image || review} 
            alt="Review" 
          />
          <input type="file" onChange={handleImage} className='hidden' id='image' />
          <p className='text-secondaryColor text-xs'>Click here to upload your image</p>
        </label>
        <div>
          <input type="text" placeholder='Your Name' className='w-full py-2 pl-2 border rounded' />
        </div>
        <div>
          <input type="text" placeholder='Your City' className='w-full py-2 pl-2 border rounded' />
        </div>
        <div>
          <textarea type="text" placeholder='Write your review here' className='w-full py-2 pl-2 border rounded h-24 overflow-y-scroll resize-none' />
        </div>
        <button className='text-sm hover:bg-secondaryColor w-full bg-mainColor text-white py-2 rounded'>Submit Now</button>
      </form>
    </div>
  );
}

export default YourReview;
