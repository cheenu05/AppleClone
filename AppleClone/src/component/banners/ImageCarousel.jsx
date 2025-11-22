// import {React, useState} from 'react'
// const ImageCarousel = () => {

//     const forward =" > "
//     const backward =" < "

//     const images = [
//         "https://picsum.photos/id/1015/800/400",
//         "https://picsum.photos/id/1016/800/400",
//         "https://picsum.photos/id/1018/800/400",
//     ];

//     const [index, setIndex] = useState(0);

//     const nextSlide = () => {
//         setIndex((prev) => (prev + 1) % images.length);
//     };

//     const prevSlide = () => {
//         setIndex((prev) => (prev - 1 + images.length) % images.length);
//     };

//     return (
//         <div className="w-full h-80 sm:h-180  mx-auto  relative">
//             <img
//                 src={images[index]}
//                 alt="slide"
//                 className="w-full h-80 sm:h-180  object-cover rounded-xl shadow-lg transition-all duration-300"
//             />

//             {/* Buttons */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute top-1/2 left-2 -translate-y-1/2 text-4xl text-slate-800 font-semibold p-2"
//             >
//                 {backward}
//             </button>

//             <button
//                 onClick={nextSlide}
//                 className="absolute  top-1/2 right-2 -translate-y-1/2 text-4xl text-slate-800 font-semibold  p-2 "
//             >
//                 {forward}
//             </button>

//             {/* Dots */}
//             <div className="flex justify-center mt-3 gap-2">
//                 {images.map((_, i) => (
//                     <span
//                         key={i}
//                         className={`w-2 h-2 rounded-full ${i === index ? "bg-black" : "bg-gray-300"
//                             }`}
//                     ></span>
//                 ))}
//             </div>
//         </div>

//     )
// }

// export default ImageCarousel


import React from 'react'
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

    <h1> hello world</h1>
    </div>
  );

}

export default ImageCarousel
