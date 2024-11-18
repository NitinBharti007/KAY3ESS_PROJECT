// src/components/ProjectsSection.js
import React from 'react';

const ProjectsSection = () => (
  <section className="p-10 bg-gradient-to-r from-blue-50 via-white to-blue-100">
    <div className="max-w-screen-xl mx-auto text-center">
      {/* Title Section with Animation */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
      Our <span className="text-blue-600">Outstanding</span> Projects
    </h2>
      
      {/* Description Section */}
      <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
        We’ve successfully completed over 50 projects, helping businesses grow through cutting-edge analytics, technology solutions, and product development. Here's a snapshot of our work that has delivered tangible results for our clients.
      </p>

      {/* Statistics Section with Animation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-10">
        <div className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-semibold text-gray-800">50+</h3>
          <p className="text-lg text-gray-600">Successful Projects</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp animate__delay-200ms">
          <h3 className="text-2xl font-semibold text-gray-800">200+</h3>
          <p className="text-lg text-gray-600">Satisfied Clients</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp animate__delay-400ms">
          <h3 className="text-2xl font-semibold text-gray-800">98%</h3>
          <p className="text-lg text-gray-600">Client Retention Rate</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp animate__delay-600ms">
          <h3 className="text-2xl font-semibold text-gray-800">4.9/5</h3>
          <p className="text-lg text-gray-600">Average Client Rating</p>
        </div>
      </div>

      
    </div>
  </section>
);

export default ProjectsSection;
