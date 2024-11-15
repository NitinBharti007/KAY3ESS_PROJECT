import React from 'react';

const services = [
  { title: "Data Analytics", description: "In-depth analysis to help you make data-driven decisions." },
  { title: "Software Development", description: "Custom software solutions tailored to your business needs." },
  { title: "Cloud Solutions", description: "Secure and scalable cloud solutions for modern businesses." },
];

const Services = () => (
  <div className="p-10 bg-gray-100 text-center mt-11">
    <h2 className="text-3xl font-bold mb-4 mt-5">Our Services</h2>
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service, index) => (
        <div key={index} className="p-5 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
