"use client"
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneVolume } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';

const GetInTouch = () => {

  var submitURL = 'https://forms.zohopublic.in/welcomelaser/form/ContactUs/formperma/2na0gMzc4z2BRjq6GRW5C0a-esTnWqJ0nV60Md7L8A0/htmlRecords/submit';

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit =  async (e) => {
    e.preventDefault();
     if(name != '' || email != '' || phone != '' || message != ''){
      const response = await fetch(submitURL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(
          { Name_First: name, Email: email, PhoneNumber_countrycode: phone, MultiLine: message}
        ), // body data type must match "Content-Type" header
      });
      console.log(response.json()); // parses JSON response into native JavaScript objects
    }
  }


  return (
    <section className="bg-gray-100 py-12" id="contact">
      <div className="container mx-auto max-w-[1000px]">
       <div className='text-center'>
         <h2 className='main-heading'>Get In Touch</h2>
         <div className='h-line'></div>
       </div>
      <div className='flex flex-wrap items-center mt-6'>
        {/* Contact Information */}
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <div className="flex items-center mb-6">
            <span className="text-gray-700 mr-2 text-4xl"><AiOutlineMail/></span>
            <span className='ps-3 text-lg'><b className='block'>Email</b> <a href='mailto:welcomelaser@gmail.com'>welcomelaser@gmail.com</a></span>
          </div>
          <div className="flex items-center mb-6">
            <span className="text-gray-700 mr-2 text-4xl"><FaPhoneVolume/></span>
            <span className='ps-3 text-lg'>
              <a href='tel:9876-5432-10'>9876-5432-10</a><br/>
              <a href='tel:9876-5432-10'>9876-5432-10</a>
            </span>
          </div>
          <div className="flex items-center text-lg">
            <span className="text-gray-700 mr-3 text-4xl"><FaLocationDot/></span>
            <span className='ps-3'><b>Address:</b><br/>123 Main Street, Cityville</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 py-8 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-4 py-2"
               onChange={(e) => { setName(e.target.value);}}
               required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-4 py-2"
              onChange={(e) => { setEmail(e.target.value);}}
               required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Phone</label>
              <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded px-4 py-2"
              onChange={(e) => { setPhone(e.target.value);}}
               required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" className="w-full border border-gray-300 rounded px-4 py-2 h-32"
               onChange={(e) => { setMessage(e.target.value);}}
               required></textarea>
            </div>
            <button type="submit" className=" bg-primary-700 text-white px-8 py-4 rounded-full hover:bg-blue-700">Send Message</button>
          </form>
        </div>
       </div>
      </div>
    </section>
  );
}

export default GetInTouch;
