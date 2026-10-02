import React, { useEffect, useState,useContext } from 'react'
import { ShopContext } from '../context/ShopContext'; 
import {assets} from '/home/karan/Desktop/e-com/src/assets/frontend_assets/assets.js'
import Title from '../components/Title'
const Cart = () => {

  const {products,currency,cartItems,updateQuantity}=useContext(ShopContext);
  const[cartData,setcartData]=useState([]);

 
  useEffect(()=>{

    const temp=[];

    for(const items in cartItems){
    for(const item in cartItems[items]){
      if(cartItems[items][item]>0){
        temp.push({
      _id:items,
      size:item,
    quantity:cartItems[items][item]})}
      }
    }
   setcartData(temp)
    
  },[cartItems])
  return (
    <div className='border-t pt-14'>

      <div className="text-2xl mb-3">

<Title text1="Your" text2={"Cart"} />
      </div>

      <div>

        {cartData.map((item,index)=>{
        const productData=products.find((product)=>product._id===item._id);

        return (
          <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_.5fr_0.5fr] sm:grid-cols-[4fr_4fr_0.5fr] items-center gap-4'>
            <div className="flex items-start gap-2">
              <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
              <div>
                <p className='text-xs sm:text-lg font-medium '>{productData.name}</p>

                <div className="flex items-center gap-5 mt-2">
                  <p>{currency}{productData.price}</p>
                  <p className='px-2 ms:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                </div>
              </div>
            </div>

            <input type="number" className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' min={1} defaultValue={item.quantity} />
            <img className='w-4 mr-3' onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} alt="" />
          </div>
        )
        })}
      </div>
      
    </div>
  )
}

export default Cart
