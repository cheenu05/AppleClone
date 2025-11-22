import React from 'react'

const IpadAir = () => {
    return (
        <>
            <div className='w-full h-[500px] bg-[url("")] bg-center bg-cover flex flex-col items-center gap-3 bg-gray-200'>
                <h1 className=' text-black text-5xl font-semibold mt-12' >iPad Air</h1>
                <h3 className=' text-black text-2xl ' > Now supercharged by the M3 chip. </h3>
                <div className=' flex gap-4 ' >
                    <button className=' bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 ' >Learn more</button>
                    <button className='border-2 border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-600 ' >Buy</button>
                </div>
            </div>
        </>
    )
}

export default IpadAir
