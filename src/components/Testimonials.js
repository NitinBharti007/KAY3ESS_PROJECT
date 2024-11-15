// src/components/Testimonials.js
import React from 'react';

const testimonials = [
  { name: "Jane Doe", feedback: "Outstanding service and results!" },
  { name: "John Smith", feedback: "Highly recommended for tech solutions." },
];

const Testimonials = () => (
  <section className="p-10 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
    <div className="flex justify-center space-x-6">
      {testimonials.map((testimonial, idx) => (
        <div key={idx} className="p-5 bg-white rounded shadow">
          <p className="text-lg">{testimonial.feedback}</p>
          <h3 className="text-sm font-bold mt-4">{testimonial.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
