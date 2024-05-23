"use client"
import React, { useState } from 'react'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import Menu from '@/public/menu'
import Close from '@/public/Close'





const font = Playfair_Display({
  subsets : ['latin'],
  weight : ['400', '700']
})


const Navbar = () => {
  const [isClick, setisClick] = useState(false)

const toggleNavbar = ():void => {
  setisClick(!isClick)
}


  return (
<header className=' w-full  mb-[50px]'>
    <nav className=' container mx-auto flex justify-between items-center pt-4  '>
      <Link href={"/"}>
      <h2 className={`${font.className} capitalize text-2xl font-bold p-2`}>rad plants</h2>
      </Link>
      <ul className=' md:flex gap-5 text-gray-500 hidden justify-center items-center text-lg'>
        <Link href={"/"}>
        <li className=' hover:text-black duration-100 cursor-default'>Home</li>
        </Link>
        <li className=' hover:text-black duration-100 cursor-default'>Catalogue</li>
        <li className=' hover:text-black duration-100 cursor-default'>Contact</li>
      </ul>
      <div className=' flex gap-5 max-md:hidden text-lg'>
        <p>Search</p>
        <p>Cart()</p>
      </div>


      <button className='md:hidden outline-none p-2   ' onClick={toggleNavbar} >
      {isClick ? <Close/> : <Menu/>}
      </button>


        
        

      
    </nav>
      {isClick && (
        <div className='md:hidden px-2 pb-3 pt-2 space-y-1 flex flex-col absolute w-full bg-black text-white'>
          <Link href={"/"} className=' p-3 hover:bg-white hover:text-black'>
          Home
        </Link>
        <a className=' p-3 hover:bg-white hover:text-black'>Catalogue</a>
        <a className=' p-3 hover:bg-white hover:text-black'>Contact</a>
      </div>
      )}
</header>
  )
}

export default Navbar