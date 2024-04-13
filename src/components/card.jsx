// Card.js
import React from 'react'
import '../assets/Card.css'

export const Card = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-8 mx-auto mt-14'>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
          <div className='cursor-pointer relative overflow-hidden h-96 rounded-lg transition duration-300 ease-in hover:shadow hover:scale-105'>
            <img
              className='object-cover w-full h-96'
              src='./rte.jpg'
              alt='Card'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in'></div>
            <div className='absolute inset-x-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40 text-white h-32'>
              <h2 className='text-xl font-bold'>Amazon</h2>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
          <div className='cursor-pointer relative overflow-hidden h-96 rounded-lg transition duration-300 ease-in hover:shadow hover:scale-105'>
            <img
              className='object-cover w-full h-96'
              src='./congo.jpeg'
              alt='Card'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in'></div>
            <div className='absolute inset-x-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40 text-white h-32'>
              <h2 className='text-xl font-bold'>Congo</h2>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
          <div className='cursor-pointer relative overflow-hidden h-96 rounded-lg transition duration-300 ease-in hover:shadow hover:scale-105'>
            <img
              className='object-cover w-full h-96'
              src='./borneo.jpg'
              alt='Card'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in'></div>
            <div className='absolute inset-x-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40 text-white h-32'>
              <h2 className='text-xl font-bold'>Borneo</h2>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
          <div className='cursor-pointer relative overflow-hidden h-96 rounded-lg transition duration-300 ease-in hover:shadow hover:scale-105'>
            <img
              className='object-cover w-full h-96'
              src='./primorye.jpg'
              alt='Card'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in'></div>
            <div className='absolute inset-x-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40 text-white h-32'>
              <h2 className='text-xl font-bold'>Primorye</h2>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
          <div className='cursor-pointer relative overflow-hidden h-96 rounded-lg transition duration-300 ease-in hover:shadow hover:scale-105'>
            <img
              className='object-cover w-full h-96'
              src='https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcR1xmjpnEpP1OvYkHhX_-vDZp1JDPRZz5dpLGYZoe7lOOHVBEcWaunwyeel9772Zalo'
              alt='Card'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in'></div>
            <div className='absolute inset-x-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40 text-white h-32'>
              <h2 className='text-xl font-bold'>Daintree</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
