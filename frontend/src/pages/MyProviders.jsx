import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProviderContext } from '../context/ProviderContext';
import { toast } from 'react-toastify';

const MyProviders = () => {
    const navigate = useNavigate();
    const { userProvider, removeProviderFromMyList } = useContext(ProviderContext);

    const handleRemove = (providerId) => {
        removeProviderFromMyList(providerId);
        toast.success("Provider Removed")
    };

    return (
        <div className='border-t border-mainColor min-h-[80vh]'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4  mt-8 pb-6'>
                {userProvider.reverse().map((item, index) => (
                    <div key={index} className='bg-white cursor-pointer border sm:p-4 p-8 overflow-hidden flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-16 h-16 sm:w-20 sm:h-20 rounded-full' src={item.providerImage} alt="" />
                            <div className='flex flex-col items-start'>
                                <p className='font-medium sm:text-xl text-lg '>{item.providerName}</p>
                                <p className='px-2 py-0.5 bg-blue-50 border text-center rounded-full text-xs sm:text-sm w-auto'>{item.category}</p>
                            </div>
                        </div>
                        <div className='mt-4 sm:mt-2'>
                            <p className='font-medium text-sm sm:text-lg'>Phone: <span className='font-mono'>{item.providerPhone}</span></p>
                            <p className='font-medium text-sm sm:text-lg'>Bio: <span className=' font-normal text-sm text-gray-600'>{item.providerBio}</span></p>
                        </div>
                        <button 
                            onClick={() => {  navigate(`/${item._id}`);window.scrollTo(0, 0); }}  
                            className='mt-4 sm:mt-2 w-full bg-mainColor text-white text-sm py-2 hover:bg-secondaryColor'>
                            View Provider
                        </button>
                        <button 
                            onClick={() => handleRemove(item._id)} 
                            className='mt-4 sm:mt-2 w-full bg-red-500 text-white text-sm py-2 hover:bg-red-300'>
                            Remove Provider
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProviders;
