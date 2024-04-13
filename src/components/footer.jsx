import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-emerald-700 dark:bg-slate-800 text-white p-4'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        {/* Left Side with Expedity Link */}
        <div className='text-2xl font-semibold text-center md:text-left'>
          <a href='#expedity' className='text-black'>
            Expe<span className='text-green-600'>dity</span>
          </a>
          <p className='text-sm mt-2 dark:text-slate-50'>Journey to the wild</p>
        </div>

        {/* Center Content */}
        <div className='text-center flex-grow'>
          <h2 className='text-lg font-bold'>
            Explore the{' '}
            <span className='text-slate-50 dark:text-green-600'>
              Rainforests
            </span>
          </h2>
          <p>
            Discover the wonders and secrets of the rainforests around the
            world.
          </p>
          <div>
            <a href='#privacy' className='hover:underline'>
              Privacy Policy
            </a>{' '}
            |
            <a href='#terms' className='hover:underline'>
              Terms of Service
            </a>
          </div>
          <div className='mt-4'>
            <span>
              © {new Date().getFullYear()} Rainforest Explorer. All rights
              reserved.
            </span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='text-xl text-center'>
          <div className='font-bold text-black mb-2'>
            Follow <span className='text-green-600'>Us</span>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <a
              href='https://facebook.com'
              className='text-[#1877f2] hover:text-opacity-80'
            >
              <FaFacebookF className='text-xl' />
            </a>
            <a
              href='https://twitter.com'
              className='text-[#1DA1F2] hover:text-opacity-80'
            >
              <FaTwitter />
            </a>
            <a
              href='https://instagram.com'
              className='text-[#E4405F] hover:text-opacity-80'
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
