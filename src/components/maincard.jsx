import React from 'react'

export const MainCard = () => {
  return (
    <>
      <div className='flex flex-wrap justify-around mt-20'>
        <div className='max-w-sm w-full md:w-[45%] lg:w-[30%] rounded overflow-hidden shadow-lg dark:bg-slate-800 mb-8'>
          <img
            className='w-full transition duration-300 ease-in transform hover:shadow-black hover:opacity-80 hover:scale-105 main-card-image'
            src='https://images.nationalgeographic.org/image/upload/v1638890315/EducationHub/photos/amazon-river-basin.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-lime-700 dark:text-lime-700'>
              Amazon Rainforest
            </div>
            <p className='text-gray-700 text-base text-yellow font-bold dark:text-gray-300'>
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
        <div className='max-w-sm w-full md:w-[45%] lg:w-[30%] rounded overflow-hidden shadow-lg dark:bg-slate-800 mb-8'>
          <img
            className='w-full transition duration-300 ease-in transform hover:shadow-black hover:opacity-80 hover:scale-105 main-card-image'
            src='./rte.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-lime-700 dark:text-lime-700'>
              Tongass National Forest
            </div>
            <p className='text-gray-700 text-base text-yellow font-bold dark:text-gray-300'>
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
      </div>
      <div className='flex flex-wrap justify-around mt-20'>
        <div className='max-w-sm w-full md:w-[45%] lg:w-[30%] rounded overflow-hidden shadow-lg dark:bg-slate-800 mb-8'>
          <img
            className='w-full transition duration-300 ease-in transform hover:shadow-black hover:opacity-80 hover:scale-105 main-card-image'
            src='./aa.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-lime-700 dark:text-lime-700'>
              Taiga
            </div>
            <p className='text-gray-700 text-base text-yellow font-bold dark:text-gray-300'>
              Taiga Forest is a beautiful forest that contains evergreen plants
              and streams, lakes, fenlands, fens, and marshlands.
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
        <div className='max-w-sm w-full md:w-[45%] lg:w-[30%] rounded overflow-hidden shadow-lg dark:bg-slate-800 mb-8'>
          <img
            className='w-full transition duration-300 ease-in transform hover:shadow-black hover:opacity-80 hover:scale-105 main-card-image'
            src='./kina2.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-lime-700 dark:text-lime-700'>
              Kinabalu National Park
            </div>
            <p className='text-gray-700 text-base text-yellow font-bold dark:text-gray-300'>
              The Kinabalu National Park boasts an extremely diverse and
              distinctive collection of plants, trees and animals.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
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
      </div>
    </>
  )
}

export default MainCard
