import React, { useContext, useEffect, useState } from 'react'

import  {ShopContext}  from '../context/ShopContext.jsx';
import Title from './Title';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller ));
        setBestSeller(bestProduct.slice(0, 6));

        console.log(bestProduct);
    }, [products]);

    return (
        <div className="my-10">

            <div className='text-center text-3xl py-8'>
                <Title text1="Best" text2="Sellers" />
                <p className='w-3/4 m-auto text-xs  sm:textsm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque beatae perferendis veritatis.</p>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item, index) => (
                    <div key={item._id || index} className=" rounded-lg p-3">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                        <p className="mt-2 font-medium" >{item.name}</p>
                        <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default BestSeller;
