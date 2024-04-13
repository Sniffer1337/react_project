import React from 'react'

export const About = () => {
  return (
    <div className=' min-h-screen'>
      <div className='container mx-auto py-12 px-4'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-green-700 text-center'>
            About Us
          </h1>
          <p className='mt-4 text-lg text-center text-green-600'>
            Learn more about our passion for jungle expeditions and
            conservation.
          </p>
        </div>

        <div className='dark:bg-gray-300 shadow-xl rounded-lg p-6'>
          <h2 className='text-2xl text-green-800 font-semibold'>
            How We Started
          </h2>
          <p className='mt-2 text-green-700'>
            Our journey began in the heart of the Amazon, driven by a deep
            passion for exploration and a commitment to environmental
            conservation. With each expedition, we bring adventurers closer to
            the untouched wonders of the world's most famous jungles.
          </p>

          <h3 className='mt-6 text-xl text-green-800 font-semibold'>
            Top Most Famous Jungles in the World
          </h3>
          <ul className='list-disc list-inside mt-2 text-green-700'>
            <li>Amazon Rainforest - The vast expanse of biodiversity.</li>
            <li>
              Congo Rainforest - Dense, mysterious, and teeming with life.
            </li>
            <li>
              Southeast Asian Rainforests - Rich in species and cultural
              history.
            </li>
            <li>
              Daintree Rainforest - Australia's unique tropical landscape.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
