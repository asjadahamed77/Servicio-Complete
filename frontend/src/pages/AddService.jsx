import React, { useContext, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import sampleImage from '../assets/sampleImage.jpg';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { ProviderContext } from '../context/ProviderContext';

const AddService = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]); // To store actual file objects
  const [loading, setLoading] = useState(false); 
  const [uploading, setUploading] = useState(false); 
  const [postDescription, setPostDescription] = useState('');
  const { backendUrl } = useContext(AppContext);
  const { providerToken } = useContext(ProviderContext);

  // Image selection handler
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 4) {
      toast.error('You can only select up to 4 images');
      return;
    }

    setSelectedImages(files.map((file) => URL.createObjectURL(file))); // For preview
    setImageFiles(files); // Store the actual files for upload
  };

  const handleUploadService = async (e) => {
    e.preventDefault();
    try {
      setUploading(true); 
      const formData = new FormData();
      formData.append('postDescription', postDescription);

      // Append each selected image file to the formData
      imageFiles.forEach((file) => {
        formData.append('postImages', file);
      });

      const { data } = await axios.post(`${backendUrl}/api/provider/add-service`, formData, {
        headers: {providerToken},
      });

      if (data.success) {
        toast.success(data.message);
        setUploading(false);
        setSelectedImages([]); // Reset images after successful upload
        setPostDescription(''); // Reset description
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
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
                onChange={(e) => setPostDescription(e.target.value)}
                value={postDescription}
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
