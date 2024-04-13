// ForestBanner.js
import React from 'react'

export const Banner = () => {
  return (
    <div className='hidden w-1000 h-400 relative overflow-hidden rounded-lg  mt-[60px]'>
      {/* Forest image */}
      <div className='mx-[84px]'>
        <img
          className='object-cover w-full h-[400px] rounded-lg'
          src='./meso.jpg'
          alt='Forest'
        />
      </div>

      {/* Banner content */}
      <div className='absolute inset-0 flex flex-col items-left justify-center text-white bg-black bg-opacity-50 rounded-lg mx-[84px]'>
        <div className='p-8 text-left'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to the Forest</h1>
          <p className='text-lg mb-6'>Explore the beauty of nature</p>
          <button className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium'>
            Explore Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
