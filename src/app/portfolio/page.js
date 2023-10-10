import React from 'react';
import Navbar from '@/app/components/Navbar';
import GetInTouch from '@/app/components/GetInTouch';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { data } from '@/app@/app/utils/data'
import Head from 'next/head';

const Page = () => {

  const portfolio_images = data.map((img) => {
    return <div className='g_box group overflow-hidden' key={img.i}>
      <Image src={img.src} alt={img.category} width="400" height="400" className=' transition-all ease-in-out group-hover:scale-110'/>
    </div>
  })

  return (
   <main>
    <Head>
      <title>Portfolio | Laser Cutting Projects in West Delhi, India</title>
      <meta name='description' content="Discover Welcome Laser's extensive portfolio showcasing our outstanding laser cutting projects in West Delhi, India. Explore our precision engraving, cutting, and custom design work for leather, rexine, and fabric industries."/>
    </Head>
    <Navbar/>
    
    <section className=' py-10'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='main-heading'>Our Portfolio</h2>
          <div className='h-line' ></div>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-4 gap-5 text-center mt-5'>
          { portfolio_images }
        </div>
        
      </div>
    </section>
    
    <GetInTouch />
    <Footer />

   </main>
  );
};

export default Page;
