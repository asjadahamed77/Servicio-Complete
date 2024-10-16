import React, { useContext, useState } from 'react'
import { ProviderContext } from '../context/ProviderContext'
import { PiUploadSimpleBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Profile = () => {
    const {providerData,setProviderData,providerToken,getProviderProfileData} = useContext(ProviderContext)
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

  return providerData && (
    <div className='border-t border-mainColor min-h-[90vh] flex flex-col sm:flex-row items-start gap-12'>
        {/* ----- Provider Profile ------- */}
        <div className='mt-[60px] flex flex-col w-full  sm:w-[350px]'>
          <form onSubmit={onSubmitHandler} className='bg-white border p-8'>
            <div className='flex gap-4 items-center'>
                {
                    editable?
                    <label htmlFor='image'>
                        <img className='w-20 h-20 rounded-full' src={image || providerData.providerImage} alt="" />
                        <input type="file" className='hidden' onChange={handleImage} id='image' />
                    </label>
                    :
                    <img className='w-20 h-20 rounded-full' src={image || providerData.providerImage} alt="" />
                }
            <div className='flex flex-col items-start'>
            {
                editable ?
                <input type="text" placeholder='Change here' className='w-full p-1 border rounded-md mb-1' />
                :
                <p className='font-semibold text-lg'>{providerData.providerName}</p>
            }
            <p className='text-sm font-light py-0.5 px-2 border rounded-full'>{providerData.category}</p>
            </div>
                
            </div>
            <div className='mt-4'>
                <p className='font-medium'>Email</p>
                <p className='text-sm text-secondaryColor'>{providerData.providerEmail}</p>
            </div>
            <div className='mt-2'>
                <p className='font-medium'>Phone</p>
                {
                    editable ?
                    <input type="number" placeholder='Change your phone' className='w-full rounded-md border text-sm p-1' />
                    :
                    <p className='text-sm text-secondaryColor'>{providerData.providerPhone}</p>
                }
            </div>
        
            <div className='mt-2'>
                <p className='font-medium'>Bio</p>
                {
                    editable?
                    <textarea className='resize-none w-full border rounded-md overflow-y-scroll h-20 p-1 text-sm' placeholder='Type here... '></textarea>
                    :
                    <p className='text-sm text-secondaryColor'>{providerData.providerBio}</p>
                }
            </div>
            <div className='flex mt-2'>

                {
                    editable ?
                    <button type='submit' onClick={()=>setEditable(false)} className='w-full text-center rounded bg-blue-700 text-white text-sm py-2 hover:opacity-85'>Save Profile</button>
                    :
                    <button onClick={()=>setEditable(true)} className='w-full text-center rounded bg-gray-700 text-white text-sm py-2 hover:opacity-85'>Edit Profile</button>
                }
            </div>
            </form>  
            {/* --- Upload Recent Work */}
            <div onClick={()=>{navigate('/add-service');window.scrollTo(0,0)}} className='cursor-pointer border text-center bg-white mt-8 py-4 hover:bg-mainColor hover:text-white duration-300 transition-all  flex items-center justify-center gap-2'>
                <PiUploadSimpleBold  className='text-lg'/>
                UPLOAD A NEW SERVICE
            </div>
        </div>
        {/* ---- User Works ------- */}
        <div className='mt-[60px] bg-white p-4 flex-1 border overflow-y-scroll min-h-[80vh] w-full'>

        </div>
      
    </div>
  )
}

export default Profile
