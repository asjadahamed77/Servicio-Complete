import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import sampleImage from '../assets/sampleImage.jpg';

const AddService = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [uploading, setUploading] = useState(false); 

  // Image selection handler
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      alert('You can only select up to 4 images');
      return;
    }
    setSelectedImages(files.map((file) => URL.createObjectURL(file)));
  };


  const handleUploadService = (e) => {
    e.preventDefault();
    setUploading(true); 

    
  };

  return (
    <div className="border-t border-mainColor min-h-[90vh] flex flex-col items-center">
      {loading ? (
       
        <div className="flex justify-center items-center min-h-screen">
          <BeatLoader color="#212121" size={25} />
        </div>
      ) : (
        <form
          onSubmit={handleUploadService}
          className="w-full sm:w-[500px] flex flex-col items-start mt-[50px] bg-white border px-4 sm:px-6 py-4"
        >
          <p className="font-semibold text-xl">Add a New Service</p>
          <div className="mt-4 flex flex-col gap-4 w-full">
            <div>
              <p className="font-medium text-secondaryColor">Upload Images</p>
              <label htmlFor="image">
                <div className="flex gap-2 mt-2">
                  {selectedImages.length === 0 ? (
                    <img
                      className="w-20 rounded border border-mainColor"
                      src={sampleImage}
                      alt="placeholder"
                    />
                  ) : (
                    selectedImages.map((image, index) => (
                      <img
                        key={index}
                        className="w-20 rounded border border-mainColor"
                        src={image}
                        alt="selected"
                      />
                    ))
                  )}
                </div>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <div>
              <p className="font-medium text-secondaryColor">
                Service Description
              </p>
              <textarea
                className="h-28 w-full border p-2 rounded overflow-y-scroll mt-1"
                placeholder="Please type here"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 bg-mainColor text-white text-sm hover:bg-secondaryColor mt-1"
                disabled={uploading}
              >
                {uploading ? (
                  <BeatLoader color="#ffffff" size={10} />
                ) : (
                  'Upload Service'
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddService;
