import React, { useContext, useState } from 'react';
import logo from '../assets/Servicio_logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import { ProviderContext } from '../context/ProviderContext';
import { UserContext } from '../context/userContext';

const Navbar = () => {
    const {providerToken,setProviderToken} = useContext(ProviderContext)
    const {userToken,setUserToken} = useContext(UserContext)
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate()

    const logout = ()=>{
        setProviderToken(false)
  localStorage.removeItem('providerToken')
  setUserToken(false)
  localStorage.removeItem('userToken')
    }
    

    return (
        <div className='px-4 sm:px-[10%] flex items-center justify-between bg-white sticky top-0 left-0 right-0 py-2 sm:py-0'>
            {/* --- Toggle Menu ------ */}
            <div className='lg:hidden flex items-center'>
                <img className='w-10 cursor-pointer' src={menu} alt="menu" onClick={() => setShowMenu(true)} />
            </div>
            {/* ------ Logo ------ */}
            <div className='md:w-52 w-36'>
                <Link onClick={()=>window.scrollTo(0,0)} to={'/'}><img src={logo} alt="logo" /></Link>
            </div>
            {/* ------- Navbar NavLinks ------- */}
            <ul className='hidden lg:flex gap-4 items-center'>
                <NavLink onClick={()=> window.scrollTo(0,0)} to={'/'}><li className='hover:text-secondaryColor hover:scale-105 duration-300 transition-all'>Home</li>
                <hr className='h-0.5 outline-none border-none bg-mainColor rounded-full mb-1 w-3/5 hidden' />
                </NavLink>
                <NavLink onClick={()=> window.scrollTo(0,0)}  to={'/browse-services'}><li className='hover:text-secondaryColor hover:scale-105 duration-300 transition-all'>Browse Services</li>
                <hr className='h-0.5 outline-none border-none bg-mainColor rounded-full w-3/5 mb-1 hidden' />
                </NavLink>
                <NavLink onClick={()=> window.scrollTo(0,0)}  to={'/all-services'}><li className='hover:text-secondaryColor hover:scale-105 duration-300 transition-all'>All Services</li>
                <hr className='h-0.5 outline-none border-none bg-mainColor rounded-full w-3/5 mb-1 hidden' />
                </NavLink>
                <NavLink onClick={()=> window.scrollTo(0,0)}  to={'/my-providers'}><li className='hover:text-secondaryColor hover:scale-105 duration-300 transition-all'>My Providers</li>
                <hr className='h-0.5 outline-none border-none bg-mainColor rounded-full w-3/5 mb-1 hidden' />
                </NavLink>
                <NavLink onClick={()=> window.scrollTo(0,0)}  to={'/help'}><li className='hover:text-secondaryColor hover:scale-105 duration-300 transition-all'>Help</li>
                <hr className='h-0.5 outline-none border-none bg-mainColor rounded-full w-3/5 mb-1 hidden' />
                </NavLink>
            </ul>
            {/* -------- SignUp Profile Search Notifications */}
            <div className='flex items-center sm:gap-4 gap-2'>
                {/* Search */}
                <div onClick={()=>{window.scrollTo(0,0); navigate('/all-services')}} className='text-[22px] text-mainColor cursor-pointer'>
                    <IoSearch />
                </div>
                {/* Notifications */}
                <div className='text-[22px] text-mainColor cursor-pointer relative'>
                    <AiFillMessage />
                    <p className='absolute top-[-6px] right-[-6px] aspect-square w-4 h-4 rounded-full bg-secondaryColor flex justify-center items-center text-white text-[8px] text-center'>0</p>
                </div>
                {/* Profile or Sign Up */}
                {
                    userToken || providerToken ? <div className='rounded-full text-[20px] cursor-pointer text-mainColor group relative '>
                        <FaUser />
                        <div className='hidden group-hover:block absolute top-full right-0 w-[150px] pt-6 bg-white z-20'>
                            <div className='px-4 text-base flex flex-col gap-2 text-gray-700 py-4 shadow-slate-100'>
                                <Link onClick={()=>window.scrollTo(0,0)} to={'/my-profile'} className='hover:text-mainColor font-medium hover:translate-x-[5px] duration-300 transition-all'>My Profile</Link>
                               <hr />
                                <Link onClick={()=>window.scrollTo(0,0)} to={'/add-service'} className='hover:text-mainColor font-medium hover:translate-x-[5px] duration-300 transition-all'>Add Service</Link>
                                <hr />
                                <p className='hover:text-mainColor font-medium hover:translate-x-[5px] duration-300 transition-all' onClick={()=>{ {logout()}; window.scrollTo(0,0)}}>Logout</p>
                            </div>
                        </div>
                    </div>
                        : <button onClick={()=> {navigate('/sign-up'); window.scrollTo(0,0)}} className='sm:px-4 px-2 py-1.5 sm:ml-2 ml-1 rounded-full bg-mainColor text-white text-sm hover:bg-secondaryColor'>Sign Up</button>
                }
            </div>

            {/* ------ Mobile Menu -------- */}
            <div className={` ${showMenu ? 'w-[250px]' : 'w-0'} overflow-hidden fixed top-0 left-0 bottom-0 min-h-full bg-white duration-300 transition-all border border-secondaryColor shadow-inner z-1000`}>
                <div className='flex justify-end p-4'>
                    <img className='w-8 cursor-pointer' src={close} alt="close" onClick={() => setShowMenu(false)} />
                </div>
                <ul className='flex flex-col gap-2 p-4'>
                    <NavLink to={'/'} onClick={() => {setShowMenu(false); window.scrollTo(0,0)}}><li className='hover:text-secondaryColor'>Home</li></NavLink>
                    <hr />
                    <NavLink to={'/browse-services'} onClick={() => {setShowMenu(false); window.scrollTo(0,0)}}><li className='hover:text-secondaryColor'>Browse Services</li></NavLink>
                    <hr />
                    <NavLink to={'/all-services'} onClick={() => {setShowMenu(false); window.scrollTo(0,0)}}><li className='hover:text-secondaryColor'>All Services</li></NavLink>
                    <hr />
                    <NavLink to={'/my-providers'} onClick={() => {setShowMenu(false); window.scrollTo(0,0)}}><li className='hover:text-secondaryColor'>My Providers</li></NavLink>
                    <hr />
                    <NavLink to={'/help'} onClick={() => {setShowMenu(false); window.scrollTo(0,0)}}><li className='hover:text-secondaryColor'>Help</li></NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
