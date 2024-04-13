// BackToTopButton.js
import React, { useState, useEffect } from 'react'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Function to toggle visibility based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener to toggle visibility
    window.addEventListener('scroll', toggleVisibility)

    // Remove the scroll event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={`cursor-pointer fixed bottom-4 right-4 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full transition-opacity duration-300 ${
        isVisible ? 'opacity-100 hover:opacity-75' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        />
      </svg>
    </div>
  )
}

export default BackToTopButton
