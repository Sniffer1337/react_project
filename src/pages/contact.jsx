import React, { useState } from 'react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
    alert('Thank you for contacting us!')
  }

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto py-12 px-4'>
        <div className='bg-white dark:bg-gray-700 shadow-xl rounded-lg p-6 md:p-12'>
          <h1 className='text-4xl font-bold text-green-700 dark:text-green-300 text-center'>
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className='mt-8 max-w-lg mx-auto'>
            <label
              htmlFor='name'
              className='block text-sm font-bold mb-2 text-green-800 dark:text-green-200'
            >
              Your Name:
            </label>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleChange}
              className='dark:text-green-600 w-full p-2 border border-green-300 rounded mb-4'
              required
            />

            <label
              htmlFor='email'
              className='block text-sm font-bold mb-2 text-green-800 dark:text-green-200'
            >
              Your Email:
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='dark:text-green-600 w-full p-2 border border-green-300 rounded mb-4'
              required
            />

            <label
              htmlFor='message'
              className='block text-sm font-bold mb-2 text-green-800 dark:text-green-200'
            >
              Message:
            </label>
            <textarea
              name='message'
              id='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              className='dark:text-green-600 w-full p-2 border border-green-300 rounded mb-4'
              required
            ></textarea>

            <button
              type='submit'
              className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
