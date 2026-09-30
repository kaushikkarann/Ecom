import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {

const [size, setSize] = useState('');
  const { productId } = useParams();
  const { products,currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        console.log(
          item
        );

        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className="flex gap-12 sm:gap-12 sm:flex-row flex-col ">
        {/* Product Image */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">

          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-1full">
            {
              productData.image.map((item, index) => {
                return <img src={item} onClick={() => setImage(item)}
                  className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer '
                  key={index} alt='' />
              })
            }
          </div>
          <div className="w-full sm:w-[80% ]">

            <img src={image} className='w-full h-auto ' alt="" />
          </div>
        </div>
        {/* ------------------Product Info------------------ */}
        <div className="flex-1">

          <h1 className='font-medium text-2xl mt-2  ' >{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_dull_icon} className='w-3.5' alt="" />
            <p className='pl-2'>(122)</p>
          </div>
            <p className='mt-4 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500'>{productData.description}</p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select size</p>
              <div className="flex gap-2 ">
                {productData.sizes.map((item,index)=>{
                 return <button onClick={()=>setSize(item)} className={`border border-gray-100 py-2 px-4 bg-gray-100 ${ item==size?'border-orange-500':''}`} key={index}>{item}</button>
                } )}
              </div>
            </div>
            <button className='bg-black cursor-pointer text-white px-8 py-3 text-sm active:bg-gray-700'>Add to cart</button>
            <hr className='mt-8 sm:w-4/5' />
      
        </div>
      </div>  

    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product
