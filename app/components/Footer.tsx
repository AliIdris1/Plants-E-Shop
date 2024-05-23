import React from 'react'
import { Playfair_Display } from 'next/font/google'

const font = Playfair_Display({
    subsets: ['latin'],
    weight: ['400','700']
})

const Footer = () => {
  return (
    <footer className={"mt-52"}>      
      <div className='flex justify-between gap-5 mb-32 max-lg:flex-col p-5 mx-auto container'>
        <h1 className={`${font.className} capitalize text-2xl font-bold`}>rad plants</h1>
        <div className='flex justify-between gap-48 max-sm:gap-0 max-sm:flex-wrap'>
          <div className='flex flex-col gap-3'>
            <span className='text-gray-500 mb-1'>Contact</span>
            <p className={`${font.className}`}>Instagram</p>
            <p className={`${font.className}`}>Facebook</p>
            <p className={`${font.className}`}>Pinterest</p>
            <p className={`${font.className}`}>YouTube</p>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-gray-500 mb-1'>Resources</span>
            <p className={`${font.className}`}>Return Policy</p>
            <p className={`${font.className}`}>Track An Order</p>
            <p className={`${font.className}`}>FAQs</p>
            <p className={`${font.className}`}>Privacy Policy</p>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-gray-500 mb-1'>About</span>
            <p className={`${font.className}`}>Our Story</p>
            <p className={`${font.className}`}>Careers</p>
            <p className={`${font.className}`}>Press</p>
          </div>
        </div>
        <select name="EUR" id="" className='outline-none bg-gray-200 p-2 w-[5rem] h-[3rem] max-lg:mt-5'>
          <option value="EUR">EUR</option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
        </select>
      </div>
      <div className='text-center text-gray-500 text-lg mb-14'>Designed by Ali idris</div>
    </footer>
  )
}

export default Footer