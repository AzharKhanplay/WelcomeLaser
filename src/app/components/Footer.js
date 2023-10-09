"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'


function Footer() {
    const [year, setYear] = useState(2023);
    useEffect(() => {
        setYear(new Date().getFullYear());
      }, []);

  return (
    <footer className='py-6 bg-blue-700 text-white relative'>
      <div className='container text-center'>
        <p>&copy; Copyright {year} <strong>Welcome Laser.</strong></p>
      </div>
      <Link href="https://wa.me/8178984954?text=Hi, I want to know more about your services!" className='fixed w-[70px] h-[70px] bottom-[50px] end-[50px] bg-green-500 rounded-full flex items-center justify-center shadow-md shadow-black' >
        <BsWhatsapp className='text-4xl'/>
      </Link>
    </footer>
  )
}

export default Footer