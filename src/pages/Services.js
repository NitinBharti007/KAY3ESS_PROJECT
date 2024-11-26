// src/components/ServicesPage.js
import React from "react";
import { FaBatteryFull, FaPlug, FaWrench, FaRegLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "POWER SUPPLIES",
    description: `
      We specialize in a wide range of power supply solutions, ensuring reliable and efficient performance for your critical applications. From battery chargers to inverters, 
      we provide products designed for both commercial and industrial needs. Our manufacturing expertise in servo stabilizers ensures unmatched quality and precision.`,
    items: [
      "Battery Charger",
      "FCBC",
      "UPS",
      "Inverters",
      "Servo Stabilizers (Manufacturing)",
    ],
    icon: <FaPlug size={50} className="text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "BATTERIES",
    description: `
      Explore our comprehensive range of high-performance batteries, designed to power everything from small devices to large-scale operations. Our lineup includes Ni-Cd batteries 
      for long-lasting energy, SMF VRLA for maintenance-free operation, and the latest Li-ion technology.`,
    items: ["Ni-Cd (Alkaline)", "LMLA (Tubular)", "SMF VRLA", "Li-ion"],
    icon: <FaBatteryFull size={50} className="text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    title: "ELECTRICAL WORK",
    description: `
      Our expertise in electrical solutions includes cabling, chemical earthing, and the design and manufacturing of LT & HT panels. We ensure compliance with safety standards 
      and deliver turnkey solutions tailored to your unique requirements.`,
    items: [
      "Cabling",
      "Chemical Earthling",
      "LT & HT Panel (Manufacturing)",
      "Distribution Board (Manufacturing)",
    ],
    icon: <FaWrench size={50} className="text-orange-600" />,
    bgColor: "bg-orange-100",
  },
  {
    title: "CONSULTANCY",
    description: `
      Gain valuable insights and actionable recommendations through our consultancy services. We offer specialized training and development programs to enhance your team's capabilities 
      and perform failure analysis to improve operational efficiency.`,
    items: ["Training & Development", "Failure Analysis"],
    icon: <FaRegLightbulb size={50} className="text-yellow-600" />,
    bgColor: "bg-yellow-100",
  },
];

const ServicesPage = () => (
  <div className="bg-gray-50">
    {/* Header Section */}
    <header className="py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Our Comprehensive <span className="text-yellow-300">Services</span>
      </h1>
      <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
        Discover our diverse range of products and services designed to cater to your technical and industrial needs.
      </p>
    </header>

    {/* Services Section */}
    <section className="py-12 lg:py-20 px-6 md:px-10 lg:px-16">
      <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className={`p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 ${service.bgColor}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            {/* Icon and Title */}
            <div className="flex items-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-md">{service.icon}</div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 ml-4">
                {service.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
              {service.description}
            </p>

            {/* Items */}
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
              Highlights:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {service.items.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-blue-600 transition duration-300 text-sm md:text-base lg:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Call-to-Action Section */}
    <section className="py-12 lg:py-16 bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-center">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
        Ready to Partner with Us?
      </h2>
      <p className="text-sm md:text-lg lg:text-xl mb-6 max-w-3xl mx-auto">
        Contact us today to learn more about how our products and services can power your success. Our team is ready to assist you at every step.
      </p>
      <a
        href="/contact"
        className="inline-block bg-yellow-400 text-gray-800 font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-yellow-500 transition duration-300 text-sm md:text-base lg:text-lg"
      >
        Get in Touch
      </a>
    </section>
  </div>
);

export default ServicesPage;
