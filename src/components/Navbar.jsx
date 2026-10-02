import React, { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets.js';

import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
const Navbar = () => {
   
   const [visible,setVisible]=useState(false);

   const {setShowSearch,getCartCount}=useContext(ShopContext);
    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <img src={assets.logo}
                className='w-50 '
                alt="" />

            <ul className='hidden sm:flex  gap-5 text-sm text-gray-700
    '>
                <NavLink to='/'
                    className='flex flex-col items-center gap-1'
                >
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-1 bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collections'
                    className='flex flex-col items-center gap-1'
                >
                    <p>Collections</p>
                    <hr className='w-2/4 border-none h-1 bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact'
                    className='flex flex-col items-center gap-1'
                >
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-1 bg-gray-700 hidden' />
                </NavLink>

                    <NavLink to='/about'
                    className='flex flex-col items-center gap-1'
                >
                    <p>About</p>
                    <hr className='w-2/4 border-none h-1 bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer'alt="search" />

                <div className="group relative">
                    <img src={assets.profile_icon} className='w-5 cursor-pointer'    alt="" />
                    <div className="group-hover:block hidden absolute droupdown-menu  right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-50/20 backdrop-blur-xl text-gray-700 rounded ">
                            <p className='cursor-pointer hover:text-black '>My Profile</p>
                            <p className='cursor-pointer hover:text-black '>Order</p>
                            <p className='cursor-pointer hover:text-black '>Logout</p>
                        </div>
                    </div>
                </div>

            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute -right-1.25  -bottom-2 bg-black leading-5 text-white aspect-square px-1 rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>

            <img onClick={()=>setVisible(true)}
             className='w-5 sm:hidden cursor-pointer '  
            src={assets.menu_icon} alt="" />

            </div>
{/* sidebar menu for small screen */}

        <div className={`absolute top-0 right-0  bottom-0 overflow-hidden bg-white transition-all  ${visible?`w-full`:
        `w-0`}`}>
            <div className="flex flex-col text-gray-600">

            <div className="flex items-center gap-4  py-3 px-5">
                <img onClick={()=>setVisible(false)}
                 src={assets.dropdown_icon} className='w-5 m-1a' alt="" />
                 <p>Back</p>

            </div>

            <NavLink onClick={()=>setVisible(false)} className='p-6 border-t pl-10 border-b ' to='/' >Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='p-6 pl-10 border-b ' to='/collections' >Collections</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='p-6 pl-10 border-b ' to='/about' >About</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='p-6 pl-10 border-b ' to='/contact' >Contact</NavLink>

            </div>



        </div>
        </div>
    )
}

export default Navbar
