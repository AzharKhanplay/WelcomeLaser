import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
  return (
    <section className='bg-gray-200 py-12'>
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Pricing</h2>
      <div className="flex justify-center">
        {/* Pricing Option 1 */}
        <div className="w-1/3 bg-white p-6 mx-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-4">Basic Package</h3>
          <ul className="text-gray-700">
            <li className='flex items-center'><FaCheckCircle className="text-green-500 mr-2" /> <span>Engraving on leather</span> - <span className=' text-primary-700'>Rs. 6/min</span></li>
            <li className='flex items-center'><FaCheckCircle className="text-green-500 mr-2" />Basic design options - <span className=' text-primary-700'>Rs. 2000/piece</span></li>
            <li className='flex items-center'><FaCheckCircle className="text-green-500 mr-2" />Standard cutting services</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 mt-6 rounded-full hover:bg-blue-700">
            Get Started 
          </button>
        </div>

        {/* Pricing Option 2 */}
        <div className="w-1/3 bg-white p-6 mx-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-4">Premium Package</h3>
          <ul className="text-gray-700">
            <li className='flex items-center'><FaCheckCircle className="text-green-500 mr-2" />Advanced engraving techniques</li>
            <li className='flex items-center'><FaCheckCircle className="text-green-500 mr-2" />Custom design options</li>
            <li className='flex items-center'><FaCheckCircle className="text-green-500 mr-2" />Precision cutting services</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 mt-6 rounded-full hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Pricing Option 3 */}
        <div className="w-1/3 bg-white p-6 mx-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-4">Custom Package</h3>
          <ul className="text-gray-700">
            <li className='flex items-center'><FaCheckCircle className="text-green-500 mr-2" />Tailored to your specific needs</li>
            <li className='flex items-center'><FaCheckCircle className="text-green-500 mr-2" />Consultation for design ideas</li>
            <li className='flex items-center'><FaCheckCircle className="text-green-500 mr-2" />Flexible cutting and engraving</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 mt-6 rounded-full hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Pricing;
