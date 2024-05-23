import Image from 'next/image'
import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'


const font = Playfair_Display({
    subsets: ['latin'],
    weight: ['400','700']
})

const Featured = () => {
  return (
    <div className='mt-28 '>
        <div className='flex justify-between gap-5  max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-center'>
            <div className='flex flex-col mr-10 max-sm:m-0 '>
                <h3 className={`${font.className} text-5xl mb-4 `}>Featured</h3>
                <p className='text-base w-[240px] mt-4 text-gray-500'>Our plants are 100% organic,we dont use pesticides or harmful chemicals.</p>
                <span className='text-base mt-5 text-gray-500'>But please dont eat them</span>
                <button className='hover:bg-black hover:text-white duration-500 bg-white border-b-black border-b-2 border-x-2 border-x-gray-300 w-[80%] max-sm:w-full  mt-8 p-2'>Shop all Favourites</button>
            </div>
            <div className='flex flex-col max-sm:mt-14'>
                <Image src={"/feat-1.jpg"} alt='feat' width={300} height={300}/>
                <p className='text-gray-500 mt-5 text-sm'>Plant 1</p>
                <span className={`${font.className} text-2xl mt-1`}>150€</span>
            </div>
            <div className='flex flex-col'>
                <Image src={"/feat-2.jpg"} alt='feat' width={300} height={300}/>
                <p className='text-gray-500 mt-5 text-sm'>Plant 2</p>
                <span className={`${font.className} text-2xl mt-1`}>70€</span>
            </div>
            <Link href={"/ProductPage"}>
            <div className='flex flex-col '>
                <div className='relative'>
                <Image src={"/feat-3.jpg"} alt='feat' width={300} height={300} className=''/>
                <div className='absolute top-6 right-5 max-lg:right-3 max-lg:top-4   p-3 bg-black w-[110px] h-[40px] max-lg:w-[90px] max-md:text-xs max-md:w-[71px] max-lg:h-[25px] flex justify-center items-center text-white font-light'>Sold out</div>
                </div>
                <p className='text-gray-500 mt-5 text-sm'>Plant 3</p>
                <span className={`${font.className} text-2xl mt-1`}>50€</span>
            </div>
            </Link>
        </div>
    </div>
)
}

export default Featured