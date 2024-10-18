import React, { useContext, useState } from 'react';
import review from '../assets/review-img.png';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { UserContext } from '../context/userContext';

const YourReview = () => {
  const [image, setImage] = useState(null); 
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerCity, setReviewerCity] = useState("");
  const [reviewAbout, setReviewAbout] = useState("");
  const [imageFile, setImageFile] = useState(null); 
  const {backendUrl} = useContext(AppContext)
  const {userToken} = useContext(UserContext)
  const handleImage = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      setImage(URL.createObjectURL(file)); 
      setImageFile(file); 
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

  

    try {
      const formData = new FormData();
      formData.append('reviewerName', reviewerName);
      formData.append('reviewerCity', reviewerCity);
      formData.append('reviewAbout', reviewAbout);

      // If an image was uploaded, add it to the formData
      if (imageFile) {
        formData.append('reviewerImage', imageFile);
      }

      // Send data to the server
      const {data} = await axios.post(backendUrl+"/api/user/add-review", formData, {
        headers: {
          userToken
        },
      });

      if (data.success) {
        toast.success(data.message);
        // Clear form inputs
        setReviewerName("");
        setReviewerCity("");
        setReviewAbout("");
        setImage(null);
        setImageFile(null);
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred');
      console.error(error);
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
      <form onSubmit={onSubmitHandler} className='flex flex-col sm:w-[500px] w-[350px] mt-12 bg-white px-4 py-8 gap-4 border rounded'>
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
          <input 
            type="text" 
            placeholder='Your Name' 
            onChange={(e) => setReviewerName(e.target.value)} 
            value={reviewerName} 
            className='w-full py-2 pl-2 border rounded' 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Your City' 
            onChange={(e) => setReviewerCity(e.target.value)} 
            value={reviewerCity} 
            className='w-full py-2 pl-2 border rounded' 
          />
        </div>
        <div>
          <textarea 
            placeholder='Write your review here' 
            onChange={(e) => setReviewAbout(e.target.value)} 
            value={reviewAbout} 
            className='w-full py-2 pl-2 border rounded h-24 overflow-y-scroll resize-none' 
          />
        </div>
        <button 
          type='submit' 
          className='text-sm hover:bg-secondaryColor w-full bg-mainColor text-white py-2 rounded'>
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default YourReview;
