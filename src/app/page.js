import React from 'react';
import Navbar from '@/app/components/Navbar';
import Header from '@/app/components/Header';
import ServiceCard from '@/app/components/ServiceCard';
import About from '@/app/components/About';
import Portfolio from '@/app/components/Portfolio';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

import { MdOutlineDesignServices, MdContentCut } from 'react-icons/md'
import { GiLaserburn } from 'react-icons/gi'

const services = [
  {
    icon: <GiLaserburn/>,
    title: 'Engraving',
    description: 'Experience the pinnacle of precision with our high-quality engraving services. Whether it\'s leather, rexine, or fabric, our expertise ensures impeccable results for every project.',
  },
  {
    icon: <MdContentCut/>,
    title: 'Cutting',
    description: 'Our cutting solutions stand out for their unparalleled accuracy. From leather to rexine and fabric, we guarantee flawlessly cut materials, meeting the highest industry standards.',
  },
  {
    icon: <MdOutlineDesignServices/>,
    title: 'Design',
    description: 'Elevate your projects with our tailored design services. We understand that every client is unique, and our designs are crafted to meet your specific requirements, ensuring a one-of-a-kind result.',
}
];


const Home = () => {

  return (
   <>
   <main>  

    <Navbar/>
    <Header/>

    <section className="py-10 text-center">
     <div className='container'>
      <h2 className="main-heading">Precision Laser Cutting Services</h2>
      <div className='h-line'></div>
      <p className="text-lg mb-8">
        Offering engraving, cutting, and design services for leather, rexine, and fabric industries.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
     </div>
    </section>

    <About />
    <Portfolio/>
    {/* <Pricing/> */}
    <GetInTouch />
    <Footer />

   </main>
   </>
  );
};

export default Home;
