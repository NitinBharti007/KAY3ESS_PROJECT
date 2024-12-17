// src/components/ServicesSection.js
import React from 'react';
import { FaBatteryFull, FaPlug, FaWrench, FaRegLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Adding animation with framer-motion

const services = [
  {
    title: "POWER SUPPLIES",
    items: [
      { name: "Battery Charger" },
      { name: "FCBC" },
      { name: "UPS" },
      // { name: "IPS" },
      { name: "Inverters" },
      { name: "Servo Stabilizers (Manufacturing)" },
      // { name: "CP" },
    ],
    icon: <FaPlug size={50} className="text-blue-600" />,
    background: 'bg-white border border-gray-200 shadow-md',
  },
  {
    title: "BATTERIES",
    items: [
      { name: "Ni-Cd (Alkaline)" },
      { name: "LMLA (Tubular)" },
      { name: "SMF VRLA" },
      { name: "Li-ion" },
    ],
    icon: <FaBatteryFull size={50} className="text-green-600" />,
    background: 'bg-white border border-gray-200 shadow-md',
  },
  {
    title: "ELECTRICAL WORK",
    items: [
      { name: "Cabling" },
      { name: "Chemical Earthling" },
      // { name: "Turnkey Project" },
      { name: "LT & HT Panel (Manufacturing)" },
      { name: "Distribution Board (Manufacturing)" },
    ],
    icon: <FaWrench size={50} className="text-orange-600" />,
    background: 'bg-white border border-gray-200 shadow-md',
  },
  {
    title: "CONSULTANCY",
    items: [
      { name: "Training & Development" },
      { name: "Failure Analysis" },
    ],
    icon: <FaRegLightbulb size={50} className="text-yellow-600" />,
    background: 'bg-white border border-gray-200 shadow-md',
  }
];

const ServicesSection = () => (
  <section className="py-16 lg:py-24 px-6 lg:px-16 bg-gray-50">
    <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
      Our <span className="text-blue-600">Creative</span> Products & Services
    </h2>

    {/* Grid layout for the cards */}
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          className={`p-6 rounded-xl ${service.background} hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105`}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }} // Smoother fade-in
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gray-100 rounded-full shadow-sm">{service.icon}</div>
          </div>
          <motion.h3
            className="text-xl lg:text-2xl font-semibold text-center text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
          >
            {service.title}
          </motion.h3>
          <ul className="list-none space-y-4">
            {service.items.map((item, index) => (
              <motion.li
                key={index}
                className="text-lg text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05, color: "#1D4ED8", letterSpacing: "0.5px" }}
                transition={{ duration: 0.3 }}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
