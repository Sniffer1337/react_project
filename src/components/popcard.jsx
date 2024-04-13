import React from 'react'
import './MainCard.css' // Import custom CSS for MainCard component

export const PopCard = () => {
  return (
    <>
      <div className='flex justify-around mt-[80px]'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img
            className='w-full transition duration-300 ease-in transform hover:shadow-black hover:opacity-80 hover:scale-105 main-card-image'
            src='https://images.nationalgeographic.org/image/upload/v1638890315/EducationHub/photos/amazon-river-basin.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-darkNavy'>
              Amazon Rainforest
            </div>
            <p className='text-gray-700 text-base text-yellow font-bold'>
              The Amazon Rainforest, Brazil. One of the richest ecosystems on
              earth the Amazon Rainforest is earth's most kept treasure.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='shadow-lg inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #photography
            </span>
            <span className='shadow-lg inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #travel
            </span>
            <span className='shadow-lg inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #explore
            </span>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img
            className='w-full transition duration-300 ease-in transform hover:shadow-black hover:opacity-80 hover:scale-105 main-card-image'
            src='./rte.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-darkNavy'>
              Tongass National Forest
            </div>
            <p className='text-gray-700 text-base text-yellow font-bold'>
              Tongass National Forest which is the largest in the United States.
              It happens to be the largest temperate forest in North America.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='shadow-lg inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #photography
            </span>
            <span className='shadow-lg inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #travel
            </span>
            <span className='shadow-lg inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #winter
            </span>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img
            className='w-full transition duration-300 ease-in transform hover:shadow-black hover:opacity-80 hover:scale-105 main-card-image'
            src='https://images.nationalgeographic.org/image/upload/v1638890315/EducationHub/photos/amazon-river-basin.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-darkNavy'>
              Amazon Rainforest
            </div>
            <p className='text-gray-700 text-base text-yellow font-bold'>
              The Amazon Rainforest, Brazil. One of the richest ecosystems on
              earth the Amazon Rainforest is earth's most kept treasure.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='shadow-lg inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #photography
            </span>
            <span className='shadow-lg inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #travel
            </span>
            <span className='shadow-lg inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #explore
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopCard
