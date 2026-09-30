import React from 'react'

const NewsLetterBox = () => {
    const onSumbit=(e)=>{
        e.preventDefault();

    }
    return (
        <div className='text-center'>

            <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>

            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, consequatur.
            </p>
            <form onSubmit={onSumbit} className='w-full sm:w-1/2 flex items-center  gap-3 mx-auto my-6 border p-2'>
                <input type="email" name="" id="Email" required placeholder='jhon@doe.com'
                    className='w-full  border-gray-400 p-1 sm:flex  py-4 outline-none' />
                <button type="submit" className='bg-black mt-4 text-white text-xs px-10 py-4' >
                    SUBSCRIBE
                </button>
            </form>

        </div>
    )
}

export default NewsLetterBox
