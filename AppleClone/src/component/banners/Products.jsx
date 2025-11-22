import React from 'react'

const Products = () => {
    return (
        <>
            {/* airPods pro 3 */}

            <div className="grid sm:grid-cols-2 grid-rows-3 bg-pink-200 ">
                <div className="p-2">

                    <div className='w-full h-[500px] bg-[url("")] bg-center bg-cover flex flex-col items-center gap-3 bg-gray-200'>
                        <h1 className=' text-black text-5xl font-semibold mt-12' >AirPods Pro 3</h1>
                        <div className='flex flex-col items-center'>
                            <h3 className=' text-black text-2xl ' >The world's best in ear.</h3>
                            <h3 className='text-black text-2xl'>Active Noise Cancellation.</h3>
                        </div>
                        <div className=' flex gap-4 ' >
                            <button className=' bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 ' >Learn more</button>
                            <button className='border-2 border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-600 ' >Buy</button>
                        </div>
                    </div>

                </div>



                {/* watch series 11 */}

                <div className=" p-2">

                    <div className='w-full h-[500px] bg-[url("")] bg-center bg-cover flex flex-col items-center gap-3 bg-gray-200'>

                        <h1 className=' text-black text-5xl font-semibold mt-12' > Watch Series 11 </h1>
                        <h3 className=' text-black text-2xl ' >The ultimate watch for healthy life.</h3>

                        <div className=' flex gap-4 ' >
                            <button className=' bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 ' >Learn more</button>
                            <button className='border-2 border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-600 ' >Buy</button>
                        </div>
                    </div>

                </div>


                {/* ipad pro */}
                <div className=" p-2">
                    <div className='w-full h-[500px] bg-[url("")] bg-center bg-cover flex flex-col items-center gap-3 bg-gray-200'>

                        <h1 className=' text-black text-5xl font-semibold mt-12' >iPad Pro</h1>
                        <div className='flex flex-col items-center'>
                            <h3 className=' text-black text-2xl ' > Advance AI performance.</h3>
                            <h3 className='text-black text-2xl'> and game-changing capabilities.</h3>
                        </div>

                        <div className=' flex gap-4 ' >
                            <button className=' bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 ' >Learn more</button>
                            <button className='border-2 border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-600 ' >Buy</button>
                        </div>
                    </div>
                </div>



                {/* MacBook pro 14 */}

                <div className=" p-2">
                    <div className='w-full h-[500px] bg-[url("")] bg-center bg-cover flex flex-col items-center gap-3 bg-gray-200'>
                        <h1 className=' text-black text-5xl font-semibold mt-12' > MacBook Pro 14 </h1>
                        <h3 className=' text-black text-2xl ' > Supercharged by M5. </h3>
                        <div className=' flex gap-4 ' >
                            <button className=' bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 ' >Learn more</button>
                            <button className='border-2 border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-600 ' >Buy</button>
                        </div>
                    </div>
                </div>



                {/* Macbook air */}
                <div className="p-2">
                    <div className='w-full h-[500px] bg-[url("")] bg-center bg-cover flex flex-col items-center gap-3 bg-gray-200'>

                        <h1 className=' text-black text-5xl font-semibold mt-12' >MacBook Air</h1>

                        <div className='flex flex-col items-center'>
                            <h3 className=' text-black text-2xl ' > Sky blue colour.</h3>
                            <h3 className='text-black text-2xl'> Sky high performance with M4.</h3>
                        </div>

                        <div className=' flex gap-4 ' >
                            <button className=' bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 ' >Learn more</button>
                            <button className='border-2 border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-600 ' >Buy</button>
                        </div>
                    </div>
                </div>


                {/* Trade In  */}

                <div className=" p-2">
                    <div className='w-full h-[500px] bg-[url("")] bg-center bg-cover flex flex-col items-center gap-3 bg-gray-200'>
                        <h1 className=' text-black text-5xl font-semibold mt-12' >Trade In</h1>

                        <div className='flex flex-col items-center'>
                            <h3 className=' text-black text-2xl ' > Upgrade and save.</h3>
                            <h3 className='text-black text-2xl'> it's that easy.</h3>
                        </div>

                        <button className=' bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 ' >Get your estimate</button>


                    </div>
                </div>
            </div>


        </>
    )
}

export default Products
