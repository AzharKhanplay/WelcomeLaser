import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="shadow-lg shadow-slate-400 p-5 ring-2 ring-primary-700">
      <div className='text-4xl flex justify-center'>{icon}</div>
      <h3 className="text-2xl mt-3  mb-4 font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
