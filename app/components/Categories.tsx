import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'

const font = Playfair_Display({
    subsets: ['latin'],
    weight: ['400','700']
})

const Categories = () => {
  return (
    <div className='mt-28'>
      <h2 className={`${font.className} text-center text-4xl mb-16`}>Categories</h2>
      <div className='flex justify-between gap-7 mb-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-col '>
          <Image src={"/cat-1.jpg"} alt='cat' width={300} height={300} className='bg-cover max-sm:w-[200px]'/>
          <span className={`${font.className} text-2xl mt-4 max-sm:text-center`}>Jungle Plants</span>
        </div>
        <div className='flex flex-col'>
          <Image src={"/cat-2.jpg"} alt='cat' width={300} height={300} className='bg-cover max-sm:w-[200px]'/>
          <span className={`${font.className} text-2xl mt-4 max-sm:text-center`}>Outdoor Plants</span>
        </div>
        <div className='flex flex-col'>
          <Image src={"/cat-3.jpg"} alt='cat' width={300} height={400} className='bg-cover h-full max-sm:w-[200px]'/>
          <span className={`${font.className} text-2xl mt-4 max-sm:text-center`}>Bedroom Plants</span>
        </div>
        <div className='flex flex-col'>
          <Image src={"/cat-4.jpg"} alt='cat' width={300} height={400} className='bg-cover h-full max-sm:w-[200px] max-sm:h-[267px]'/>
          <span className={`${font.className} text-2xl mt-4 max-sm:text-center`}>Indoor Plants</span>
        </div>
      </div>
        <p className={`${font.className} text-4xl text-center p-5 mt-10`}>Love and work are two people what water ans sunshine are to plants</p>
    </div>
  )
}

export default Categories