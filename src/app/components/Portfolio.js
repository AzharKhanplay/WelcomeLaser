import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Portfolio(props) {
  return (
    <section className=' py-10'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='main-heading'>Our Portfolio</h2>
          <div className='h-line' ></div>
        </div>
        <div className=' grid grid-cols-4 gap-5 text-center mt-5'>
         <div className='g_box group overflow-hidden'>
           <Image src="/shoes-laser-cutting-service.jpg" alt="Image" width="400" height="400" className=' transition-all ease-in-out group-hover:scale-110'/>
         </div>
         <div className='g_box group overflow-hidden'>
           <Image src="/shoes-laser-cutting-service.jpg" alt="Image" width="400" height="400" className=' transition-all ease-in-out group-hover:scale-110'/>
         </div>
         <div className='g_box group overflow-hidden'>
           <Image src="/shoes-laser-cutting-service.jpg" alt="Image" width="400" height="400" className=' transition-all ease-in-out group-hover:scale-110'/>
         </div>
         <div className='g_box group overflow-hidden'>
          <Image src="/shoes-laser-cutting-service.jpg" alt="Image" width="400" height="400" className=' transition-all ease-in-out group-hover:scale-110'/>
         </div>
         <div className='g_box group overflow-hidden'>
          <Image src="/shoes-laser-cutting-service.jpg" alt="Image" width="400" height="400" className=' transition-all ease-in-out group-hover:scale-110'/>
         </div>
         <div className='g_box group overflow-hidden'>
          <Image src="/shoes-laser-cutting-service.jpg" alt="Image" width="400" height="400" className=' transition-all ease-in-out group-hover:scale-110'/>
         </div>
         <div className='g_box group overflow-hidden'>
          <Image src="/shoes-laser-cutting-service.jpg" alt="Image" width="400" height="400" className=' transition-all ease-in-out group-hover:scale-110'/>
         </div>
         <div className='g_box group overflow-hidden'>
          <Image src="/shoes-laser-cutting-service.jpg" alt="Image" width="400" height="400" className=' transition-all ease-in-out group-hover:scale-110'/>
         </div>
        </div>
        <div className='text-center mt-6'>
           <Link href="/portfolio/" className='btn-primary-2'>
            View All
           </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
