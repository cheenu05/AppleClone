import React from 'react'

const Iphone = () => {
  return (
  <>
      <div className='w-full h-[700px] bg-[url("")] bg-center bg-cover flex flex-col items-center gap-3 bg-black'>
          <h1 className=' text-white text-5xl font-semibold mt-12' >iPhone 18 Pro</h1>
          <h3 className=' text-white text-2xl ' >All out Pro.</h3>
          <div className=' flex gap-4 ' >
          <button className=' bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 ' >Learn more</button>
          <button className='border-2 border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white ' >Buy</button>
          </div>
      </div>  

  </>
  )
}

export default Iphone

