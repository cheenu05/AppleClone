import React from 'react'
import { Link } from 'react-router-dom'
import Iphone from '../banners/Iphone'
import IphoneAir from '../banners/IphoneAir'
import IpadAir from '../banners/IpadAir'
import Products from '../banners/Products'
import ImageCarousel from '../banners/ImageCarousel'

const Home = () => {

  const str = "Shop >"
1
  return (
    <>

        <div className='bg-[#454445] w-full h-20 flex gap-2 items-center justify-center text-[13px] font-semibold text-white '> 
          
          <h4 className='text-center sm:text-[12px]'>Get up to ₹10000 instant cashback on your favourite products with eligible cards.◊ Plus up to 6 months of No Cost EMI.‡  
          <Link to="/store" > <h4 className=' text-blue-500 hover:underline' > {str} </h4> </Link>
          </h4>
           </div>
     
        <Iphone />
        <IphoneAir />
        <IpadAir />
        <Products />
        <ImageCarousel />
        
    </>
  )
}

export default Home
