import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className='w-11/12 xl:w-4/5 m-auto flex justify-between py-5'>
        <h1 className='text-2xl font-semibold'>
          F<span className='text-mwvane'>orest</span>
        </h1>
        <div>
          <ul className='flex space-x-8 md:flex text-mwvane hidden'>
            <li>
              <Link to='/explore'>Explore</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='flex space-x-8'>
          <AiOutlineSearch size={'1.5rem'} />
        </div>
      </nav>
    </>
  )
}

export default Navbar
