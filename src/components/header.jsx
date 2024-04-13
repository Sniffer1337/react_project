import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderItems = [
  {
    imageUrl: './cover2.jpg',
    title: 'Start Your Journey',
    subtitle: 'EXPLORE FOREST AND BEYOND'
  },
  {
    imageUrl: './cover3.jpg',
    title: 'Double Nuke Burger',
    subtitle: 'EXPLORE FOREST AND BEYOND'
  },
  {
    imageUrl: './cover1.jpg',
    title: 'Double Nuke Burger',
    subtitle: 'EXPLORE FOREST AND BEYOND'
  }
]

const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === 'next'
      ? { ...style, right: '20px' }
      : { ...style, left: '20px', zIndex: '1' }

  return <div className={className} style={arrowStyle} onClick={onClick} />
}

const HeaderText = ({ title, subtitle }) => (
  <div>
    <p className='text-xl text-white font-extrabold md:flex hidden'>
      {subtitle}
    </p>
    {title.split(' ').map((word, index) => (
      <h2
        key={index}
        className={`text-6xl md:flex hidden ${
          index === 0
            ? 'text-slate-500'
            : index === 1
            ? 'text-rose-500'
            : 'text-emerald-500'
        } font-extrabold`}
      >
        {word}
      </h2>
    ))}
    <button className='bg-primary duration-200 p-2 rounded-full text-white hover:border hover:bg-white hover:border-primary hover:text-zinc-950		 font-semibold'>
      Explore Now
    </button>{' '}
  </div>
)

const HeaderSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow position='next' />,
    prevArrow: <SliderArrow position='prev' />
  }

  return (
    <Slider {...settings}>
      {sliderItems.map((item, index) => (
        <div key={index}>
          <div
            className='h-[500px] flex justify-around bg-center bg-cover'
            style={{
              backgroundImage: `url('${item.imageUrl}')`
            }}
          >
            <div></div>
            <div className='flex flex-row items-center justify-around'>
              <div></div>
              <HeaderText title={item.title} subtitle={item.subtitle} />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

const Header = () => {
  return (
    <div className='w-full h-[500px] overflow-hidden'>
      <HeaderSlider />
    </div>
  )
}

export default Header
