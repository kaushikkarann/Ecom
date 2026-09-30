import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 ">

                <div>
                    <img src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolorum. Ex assumenda beatae quae dolorem eveniet fugit, ab qui atque id tempora quia.</p>
                </div>
                <div>
                    <p className='text-zl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>

                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Get IN TOUCH</p>
                     <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1 123-456-789-0</li>
                    <li>Content@ofreer.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026 - All Rights are reservebd</p>
            </div>
        </div>
    )
}

export default Footer
