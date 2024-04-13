import React from 'react'
import Header from '../components/header.jsx'
import Card from '../components/maincard.jsx'
import Popular from '../components/card.jsx'
import Banner from '../components/banner.jsx'
import Review from '../components/customreview.jsx'
// import Header from 'src/components/header.jsx'
const reviews = [
  {
    name: 'John Doe',
    image: './kina2.jpg',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    name: 'Jane Smith',
    image: './test.png',
    comment:
      'Vestibulum nec erat nec odio pretium tristique. Proin malesuada magna et elit tincidunt, sed suscipit nisl varius. Quisque vulputate nec justo vitae vehicula. Nullam fringilla dictum nulla, in volutpat enim gravida vel.'
  }
  // Add more reviews as needed
]

export const Main = () => {
  return (
    <>
      <Header />
      <div className='text-2xl text-center text-green-600	 font-semibold mt-[48px]'>
        Continue Journey
      </div>
      <div className='text-2xl text-center text-emerald-700	 font-semibold mt-[20px]'>
        Explore <span className='text-darkNavy'>Top Destinations</span>
      </div>
      <Card />
      <div className='text-2xl text-center text-sky-800	 font-semibold mt-[60px]'>
        Most Popular
      </div>
      <Popular />
      <Banner />
      <div className='text-2xl text-center text-sky-800	 font-semibold mt-[60px]'>
        Customer Reviews
      </div>
      <div className='flex justify-center items-center min-h-screen'>
        <Review reviews={reviews} />
      </div>
    </>
  )
}

export default Main
