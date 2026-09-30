import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
 const {search,setSearch,showSearch,setShowSearch}= useContext(ShopContext);

const location=useLocation();
const [visible,setVisible]=useState(false)
useEffect(()=>{
if (location.pathname.includes('collections')) {
  setVisible(true)
  
}else{
  setVisible(false)
}
  
},[location])

    return showSearch&&visible ? (
    <div className='border-b border-t bg-gray-50 text-center '>
      
      <div className="inline-flex rounded-full p-2 text-center items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 w-3/4 sm:w-1/2">
      <input type="text" placeholder='Seach Products'
      className='flex-1 outline-none w-100  bg-inherit text-sm'
      onChange={(e)=>setSearch(e.target.value)}
      value={search} />
      <img src={assets.search_icon}  className='w-4' alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt="" />
    </div>
  ):null;
}

export default Searchbar
