import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  const handleInputChange = event => {
    setSearchInput(event.target.value)
  }

  const handleSearch = event => {
    event.preventDefault()
    console.log('Searching for:', searchInput)
    setSearchOpen(false) // Optionally close the search bar after searching
  }

  return (
    <>
      <nav className='w-11/12 xl:w-4/5 mx-auto flex justify-between py-5 items-center'>
        <h1 className='text-2xl font-semibold'>
          <Link to='/'>
            Expe<span className='text-green-600'>dity</span>
          </Link>
        </h1>

        {/* Desktop Links */}
        <div className='hidden md:flex flex-grow justify-center items-center'>
          <ul className='flex space-x-8 text-green-600 font-semibold'>
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

        {/* Search and Menu Icon Container */}
        <div className='flex items-center space-x-4'>
          <div className='flex items-center'>
            {searchOpen ? (
              <form onSubmit={handleSearch} className='flex w-full'>
                <input
                  type='text'
                  value={searchInput}
                  onChange={handleInputChange}
                  placeholder='Search...'
                  className='px-4 py-2 w-full rounded focus:outline-none focus:border-2 focus:border-green-500 focus:ring focus:ring-lime-300 transition-all'
                  autoFocus
                />
                <button type='submit' className='px-4'>
                  <AiOutlineSearch size={'1.5rem'} />
                </button>
              </form>
            ) : (
              <div className='hidden md:flex'>
                <AiOutlineSearch
                  size={'1.5rem'}
                  onClick={toggleSearch}
                  className={searchOpen ? '' : 'cursor-pointer'}
                />
              </div>
            )}
          </div>

          {/* Mobile Burger Icon */}
          <div className='md:hidden'>
            <AiOutlineMenu
              size='24'
              onClick={() => setMenuOpen(true)}
              className='cursor-pointer'
            />
          </div>
        </div>

        {/* Search Input Field, toggled visibility */}
        {searchOpen && (
          <div className='absolute top-full right-0 mt-2'>
            <input
              type='text'
              placeholder='Search...'
              value={searchInput}
              onChange={handleInputChange}
              className='p-2 border border-gray-300 rounded'
            />
            <button
              onClick={handleSearch}
              className='p-2 bg-green-500 text-white rounded ml-1'
            >
              Search
            </button>
          </div>
        )}

        {/* Conditional Rendering of Mobile Menu */}
        {menuOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-end'>
            <div className='w-1/2 sm:w-1/3 bg-white p-5'>
              <AiOutlineClose
                onClick={() => setMenuOpen(false)}
                className='cursor-pointer mb-5'
              />
              <ul className='space-y-4'>
                <li>
                  <Link to='/explore' onClick={() => setMenuOpen(false)}>
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to='/about' onClick={() => setMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='/contact' onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
