import React, { useEffect, useState,useContext } from 'react'
import { ShopContext } from '../context/ShopContext'; // adjust path if needed
import Title from '../components/Title'
const Cart = () => {

  const {products,currency,cartItems}=useContext(ShopContext);
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

      <div className="text2xl mb-3">

<Title text1="Your" text2={"Cart"} />
      </div>
      
    </div>
  )
}

export default Cart
