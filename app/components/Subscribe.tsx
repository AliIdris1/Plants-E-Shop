import React from 'react'
import { Playfair_Display } from 'next/font/google'

const font = Playfair_Display({
    subsets: ['latin'],
    weight: ['400','700']
})

const Subscribe = () => {
return (
    <div className='mt-24'>
        <div className='flex flex-col justify-center items-center mx-auto container'>
            <p className={`${font.className} text-3xl w-[24rem] mb-3 max-sm:text-2xl text-center`}>Get 15% off your next order, Subscribe to our Newseltter</p>
            <form className='mt-4 w-full justify-center items-center flex max-sm:flex-col'>
                <input type="email" placeholder='Enter your email here' className={`placeholder:${font.className} p-3 outline-none bg-gray-200 placeholder:text-black max-sm:placeholder:text-center  w-[550px] max-sm:w-[300px]`}/>
                <input type="submit"   value={'Subscribe'} className='bg-black w-36 text-white  p-3 font-bold uppercase cursor-pointer max-sm:w-[300px]'/>
            </form>
        </div>
    </div>
)
}

export default Subscribe