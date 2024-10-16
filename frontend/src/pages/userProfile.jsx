import React, { useContext, useState } from 'react'
import { ProviderContext } from '../context/ProviderContext'
import { PiUploadSimpleBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { UserContext } from '../context/userContext';


const UserProfile = () => {
    const {userData,setUserData,userToken,getUserProfileData} = useContext(UserContext)
    const {backendUrl} = useContext(AppContext)
    const navigate = useNavigate()
    const [editable,setEditable] = useState(false)
    const [image, setImage] = useState(null)

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file)) 
    }
  };

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
  }

  return userData && (
    <div className='border-t border-mainColor min-h-[90vh] flex flex-col sm:flex-row items-start gap-12'>
        {/* ----- User Profile ------- */}
        <div className='mt-[60px] flex flex-col w-full  sm:w-[350px]'>
          <form onSubmit={onSubmitHandler} className='bg-white border p-8'>
            <div className='flex gap-4 items-center'>
                {
                    editable?
                    <label htmlFor='image'>
                        <img className='w-20 h-20 rounded-full' src={image || userData.userImage} alt="" />
                        <input type="file" className='hidden' onChange={handleImage} id='image' />
                    </label>
                    :
                    <img className='w-20 h-20 rounded-full' src={image || userData.userImage} alt="" />
                }
            <div className='flex flex-col items-start'>
            {
                editable ?
                <input type="text" placeholder='Change here' className='w-full p-1 border rounded-md mb-1' />
                :
                <p className='font-semibold text-lg'>{userData.userName}</p>
            }
          
            </div>
                
            </div>
            <div className='mt-4'>
                <p className='font-medium'>Email</p>
                <p className='text-sm text-secondaryColor'>{userData.userEmail}</p>
            </div>
            <div className='mt-2'>
                <p className='font-medium'>Phone</p>
                {
                    editable ?
                    <input type="number" placeholder='Change your phone' className='w-full rounded-md border text-sm p-1' />
                    :
                    <p className='text-sm text-secondaryColor'>{userData.userPhone}</p>
                }
            </div>
        
            
            <div className='flex mt-2'>

                {
                    editable ?
                    <button type='submit' onClick={()=>setEditable(false)} className='w-full mt-2 text-center rounded bg-blue-700 text-white text-sm py-2 hover:opacity-85'>Save Profile</button>
                    :
                    <button onClick={()=>setEditable(true)} className='w-full text-center mt-2 rounded bg-gray-700 text-white text-sm py-2 hover:opacity-85'>Edit Profile</button>
                }
            </div>
            </form>  
            
        </div>
        
      
    </div>
  )
}

export default UserProfile
