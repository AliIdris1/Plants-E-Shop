import Image from 'next/image'
import React from 'react'
import { Playfair_Display } from 'next/font/google'

const font = Playfair_Display({
    subsets: ['latin'],
    weight: ['400','700']
})

const Articles = () => {
return (
    <div className='mt-28 '>
        <div className='flex justify-between gap-10 max-sm:flex-col '>
            <div className='flex flex-col max-sm:items-center relative'>
                <div className='absolute bg-white p-5 w-[200px] max-md:w-[163px] bottom-[200px] max-lg:bottom-[140px] max-md:bottom-[150px] max-sm:bottom-[115px] max-lg:text-sm right-0 max-sm:right-[37px]' >
                    <span className='text-sm text-gray-400'>Writtnen by</span>
                    <p className={`${font.className} font-light text-3xl`}>Jhon Doe</p>
                </div>
                <Image src={"/rev-2.jpg"} alt='Rev' width={500} height={0} className='w-full h-[70%] max-sm:w-[80%] bg-cover '/>            
                <span className='text-gray-500 text-sm mt-3 mb-2 font-light'>Edition 291</span>
                <p className={`${font.className}  text-2xl max-sm:text-center`}>How to water your freaking plants so they dont die after one week</p>
            </div>
            <div className='flex flex-col max-sm:items-center relative'>
            <div className='absolute bg-white p-5 w-[200px] max-md:w-[163px] bottom-[200px] max-lg:bottom-[140px] max-md:bottom-[150px] max-sm:bottom-[115px] max-lg:text-sm right-0 max-sm:right-[37px]' >
                    <span className='text-sm text-gray-400'>Writtnen by</span>
                    <p className={`${font.className} text-3xl`}>Jhon Doe</p>
                </div>
                <Image src={"/rev-2.jpg"} alt='Rev' width={500} height={0} className='w-full h-[70%] max-sm:w-[80%] bg-cover'/>
                <span  className='text-gray-500 text-sm mt-3 mb-2 font-light'>Edition 292</span>
                <p className={`${font.className} text-2xl max-sm:text-center`}>How to repot a Monstera without killing it and foster its growth</p>
            </div>
        </div>
    </div>
)
}

export default Articles