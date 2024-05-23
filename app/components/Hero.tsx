import Image from 'next/image'
import React from 'react'
import { Playfair_Display } from 'next/font/google'

const font = Playfair_Display({
    subsets: ['latin'],
    weight: ['400','700']
})

const Hero = () => {
return (
    <div className='flex md:justify-between max-md:justify-center mt-[100px]  items-center  '>
        <div className='flex flex-col max-w-[50%] max-sm:max-w-[80%] max-md:text-center'> 
            <h1 className={`${font.className} font-semibold max-sm:text-3xl text-7xl max-lg:text-4xl mb-5`}>Find perfect plants for your home</h1>
            <p className='mt-6 text-xl  max-sm:text-lg mb-5'>Beautiful plants that encourage you to get creative.</p>
            <button className='uppercase font-bold bg-black text-white w-[14rem] h-[4rem] mt-10 max-md:w-full hover:bg-white hover:text-black duration-500'>
            Shop Now
        </button>
        </div>
        <div>
            <Image src={"/landing.jpg"} width={500} height={20} alt='landing' className='bg-cover max-lg:w-[300px] max-md:hidden ' />
        </div>

        
    </div>
)
}

export default Hero