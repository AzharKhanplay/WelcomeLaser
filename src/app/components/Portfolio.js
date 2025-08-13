import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const images = [
  "1.jpg",
  "10.webp",
  "131fe5ea-6fb6-4951-86c4-4f10aee059ae.webp",
  "1772c881-2e87-40d4-ba88-69567d6a2a98 (1).webp",
  "1772c881-2e87-40d4-ba88-69567d6a2a98.webp",
  "2.webp",
  "20fc384d-15ba-409c-8836-614d550609d0.webp",
  "23f238cf-daa2-42a0-aba8-973621695f6b.webp",
]

function Portfolio() {
  return (
    <section className='py-10'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='main-heading'>Our Portfolio</h2>
          <div className='h-line'></div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 text-center mt-5'>
          {images.map((img, index) => (
            <div key={index} className='g_box group overflow-hidden'>
              <Image
                src={`/${img}`} // images should be in /public folder
                alt={`Portfolio Image ${index + 1}`}
                width={400}
                height={400}
                className='transition-all ease-in-out group-hover:scale-110'
              />
            </div>
          ))}
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
