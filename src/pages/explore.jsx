import React from 'react'
import Slider from 'react-slick'

export const Explore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  const images = [
    {
      id: 1,
      url: './cover1.jpg',
      alt: 'Rainforest 1',
      desc: 'A dense tropical rainforest'
    },
    {
      id: 2,
      url: './cover2.jpg',
      alt: 'Rainforest 2',
      desc: 'Sunlight filtering through the canopy'
    },
    {
      id: 3,
      url: './cover3.jpg',
      alt: 'Rainforest 3',
      desc: 'The mysterious depths of the jungle'
    }
  ]

  const smallImages = [
    {
      id: 1,
      url: './primorye.jpg',
      alt: 'Small Rainforest 1',
      desc: 'River through the forest'
    },
    {
      id: 2,
      url: './rte.jpg',
      alt: 'Small Rainforest 2',
      desc: 'Rare orchid in bloom'
    },
    {
      id: 3,
      url: './borreal.jpg',
      alt: 'Small Rainforest 3',
      desc: 'A quiet forest clearing'
    },
    {
      id: 4,
      url: './primorye.jpg',
      alt: 'Small Rainforest 1',
      desc: 'River through the forest'
    },
    {
      id: 5,
      url: './rte.jpg',
      alt: 'Small Rainforest 2',
      desc: 'Rare orchid in bloom'
    },
    {
      id: 6,
      url: './borreal.jpg',
      alt: 'Small Rainforest 3',
      desc: 'A quiet forest clearing'
    }
  ]

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <h2 className='text-center text-xl font-bold mt-8 mb-4'>
        Explore the Rainforests
      </h2>
      <p className='text-center mb-4'>
        Journey into the heart of nature and discover the untouched beauty of
        rainforests.
      </p>
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id} className='p-4'>
            <img
              src={image.url}
              alt={image.alt}
              style={{ width: '100%', borderRadius: '20px', height: 'auto' }}
            />
            <p className='text-center mt-2'>{image.desc}</p>
          </div>
        ))}
      </Slider>
      <div className='grid grid-cols-4 gap-4 mt-8'>
        {smallImages.map(smallImage => (
          <div key={smallImage.id} className='text-center'>
            <img
              src={smallImage.url}
              alt={smallImage.alt}
              style={{ width: '100%', borderRadius: '10px', height: 'auto' }}
            />
            <p className='mt-2'>{smallImage.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
