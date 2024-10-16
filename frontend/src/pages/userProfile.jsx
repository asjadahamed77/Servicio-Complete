import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BeatLoader } from "react-spinners";

const UserProfile = () => {
    const { userData, setUserData, userToken, getUserProfileData } = useContext(UserContext);
    const { backendUrl } = useContext(AppContext);
    const navigate = useNavigate();
    const [editable, setEditable] = useState(false);
    const [userImage, setUserImage] = useState(null);  // Preview for image file input
    const [imageFile, setImageFile] = useState(null);   // Actual image file to be sent in request
    const [loading, setLoading] = useState(false);

    // Handle image selection
    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserImage(URL.createObjectURL(file));  // Preview the selected image
            setImageFile(file);  // Store file for form submission
        }
    };

    // Update user profile details
    const updateProfile = async () => {
        setLoading(true)
        try {
            const formData = new FormData();
            formData.append('userName', userData.userName);
            formData.append('userPhone', userData.userPhone);
            formData.append('userAddress', JSON.stringify(userData.userAddress || {}));
            if (imageFile) {
                formData.append('userImage', imageFile);
            }

            const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
                headers: { userToken },
            });

            if (data.success) {
                toast.success(data.message);
                await getUserProfileData();  
                setEditable(false);  
                setLoading(false)
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    

    return loading? <div className="flex justify-center items-center min-h-screen">
    <BeatLoader color="#212121" size={25} />
  </div> : userData && (
        <div className='border-t border-mainColor min-h-[90vh] flex flex-col sm:flex-row items-start gap-12'>
            {/* User Profile Section */}
            <div className='mt-[60px] flex flex-col w-full sm:w-[350px]'>
                <div className='bg-white border p-8'>
                    <div className='flex gap-4 items-center'>
                        {editable ? (
                            <label htmlFor='image'>
                                <img className='w-20 h-20 rounded-full' src={userImage || userData.userImage} alt="" />
                                <input type="file" className='hidden' onChange={handleImage} id='image' />
                            </label>
                        ) : (
                            <img className='w-20 h-20 rounded-full' src={userData.userImage} alt="" />
                        )}
                        <div className='flex flex-col items-start'>
                            {editable ? (
                                <input type="text" placeholder='Change Name' value={userData.userName} onChange={e => setUserData(prev => ({ ...prev, userName: e.target.value }))} className='w-full p-1 border rounded-md mb-1' />
                            ) : (
                                <p className='font-semibold text-lg'>{userData.userName}</p>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className='mt-4'>
                        <p className='font-medium'>Email</p>
                        <p className='text-sm text-secondaryColor'>{userData.userEmail}</p>
                    </div>

                    {/* Phone */}
                    <div className='mt-2'>
                        <p className='font-medium'>Phone</p>
                        {editable ? (
                            <input type="number" placeholder='Change your phone' value={userData.userPhone} onChange={(e) => setUserData(prev => ({ ...prev, userPhone: e.target.value }))} className='w-full rounded-md border text-sm p-1' />
                        ) : (
                            <p className='text-sm text-secondaryColor'>{userData.userPhone}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div className='mt-2'>
                        <p className='font-medium'>Address</p>
                        {editable ? (
                            <div className='flex flex-col gap-1'>
                                <input type="text" placeholder='Street' value={userData.userAddress?.line1 || ''} onChange={(e) => setUserData(prev => ({ ...prev, userAddress: { ...prev.userAddress, line1: e.target.value } }))} className='w-full rounded-md border text-sm p-1' />
                                <input type="text" placeholder='City' value={userData.userAddress?.line2 || ''} onChange={(e) => setUserData(prev => ({ ...prev, userAddress: { ...prev.userAddress, line2: e.target.value } }))} className='w-full rounded-md border text-sm p-1' />
                            </div>
                        ) : (
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm text-secondaryColor'>{userData.userAddress?.line1}</p>
                                <p className='text-sm text-secondaryColor'>{userData.userAddress?.line2}</p>
                            </div>
                        )}
                    </div>

                    {/* Save/Edit Button */}
                    <div className='flex mt-2'>
                        {editable ? (
                            <button onClick={updateProfile} className='w-full mt-2 text-center rounded bg-blue-700 text-white text-sm py-2 hover:opacity-85'>Save Profile</button>
                        ) : (
                            <button onClick={() => setEditable(true)} className='w-full text-center mt-2 rounded bg-gray-700 text-white text-sm py-2 hover:opacity-85'>Edit Profile</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
