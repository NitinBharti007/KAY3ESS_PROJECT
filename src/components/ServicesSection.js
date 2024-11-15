// src/components/ServicesSection.js
import React from 'react';

const services = [
  { title: "Data Analytics", description: "Comprehensive data solutions for informed decisions." },
  { title: "Software Development", description: "Custom software tailored to your needs." },
  { title: "Cloud Solutions", description: "Scalable cloud infrastructures and services." }
];

const ServicesSection = () => (
  <section className="p-10 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service, idx) => (
        <div key={idx} className="p-5 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
