import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section className='py-10 bg-secondary-700'>
      <div className='container'>
        <div className='flex flex-wrap md:flex-row-reverse items-center'>
        
          <div className='w-full md:w-8/12 text-white'>
            <h2 className='main-heading'>About Us</h2>
            <div className='h-line'></div>
            <p className='mb-3 mt-4'>WelcomeLaser is the epitome of precision and artistry in the realms of leather, rexine, and fabric industries. With state-of-the-art laser technology, we craft, engrave, and cut with unmatched accuracy, breathing life into every project.</p>
            <p>What sets us apart is our profound understanding of these industries. From the supple touch of leather to the resilience of rexine and the adaptability of fabric, we comprehend the subtleties that make each material special. This expertise, combined with our dedication to quality, positions us as the preferred partner for businesses, both large and small, seeking unparalleled craftsmanship. Welcome to a world where precision marries passion.</p>
          </div>
          <div className='w-full md:w-4/12 mt-6 md:mt-0'>
            <Image
             src="/shoes-laser-cutting-service.jpg"
             alt="About Us"
             width="400"
             height="500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About