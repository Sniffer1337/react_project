import React, { useState } from 'react'

export const CustomReview = ({ reviews }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const currentReview = reviews[currentReviewIndex]

  const handleNextReview = () => {
    setCurrentReviewIndex(prevIndex => (prevIndex + 1) % reviews.length)
  }

  const handlePrevReview = () => {
    setCurrentReviewIndex(
      prevIndex => (prevIndex - 1 + reviews.length) % reviews.length
    )
  }

  return (
    <div className='max-w-md mx-auto bg-neutral-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-4xl mb-20 dark:bg-slate-800'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0 flex justify-center items-center'>
          <img
            className='h-48 w-48 object-cover relative top-5 rounded-full mx-8 my-8 md:my-0'
            src={currentReview.image}
            alt={`${currentReview.name}'s photo`}
          />
        </div>
        <div className='p-8 flex flex-col justify-center'>
          <div className='uppercase tracking-wide text-xl text-indigo-500 font-bold text-center dark:text-green-800'>
            {currentReview.name}
          </div>
          <p className='mt-2 text-green-900 text-center font-bold dark:text-blue-600'>
            {currentReview.comment}
          </p>
        </div>
      </div>
      <div className='flex justify-center mt-2 space-x-4 px-4'>
        <button
          onClick={handlePrevReview}
          className='bg-gray-200 hover:bg-gray-400 px-3 py-1 rounded-lg focus:outline-none dark:bg-slate-600 dark:text-purple-50 dark:hover:bg-green-800'
        >
          Previous
        </button>
        <button
          onClick={handleNextReview}
          className='bg-gray-200 hover:bg-gray-400 px-3 py-1 rounded-lg focus:outline-none dark:bg-slate-600 dark:text-purple-50 dark:hover:bg-green-800'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default CustomReview
