import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ImageCarousel = () => {
 
  return (
    <div className='m-4'>
    <Splide
      options={{
        type: 'loop',
        perPage: 1,
        gap: '1rem',
        autoplay: true,
        width: '100%',
        height:'600px',
        objectFit:'cover',
      
      }}
    >
      <SplideSlide>
        <img className='w-full ' src="https://picsum.photos/500/300?1" alt="Image 1" />
      </SplideSlide>

      <SplideSlide>
        <img className='w-full ' src="https://picsum.photos/500/300?2" alt="Image 2" />
      </SplideSlide>

      <SplideSlide>
        <img className='w-full ' src="https://picsum.photos/500/300?3" alt="Image 3" />
      </SplideSlide>
    </Splide>
    
    </div>
  );

}

export default ImageCarousel
