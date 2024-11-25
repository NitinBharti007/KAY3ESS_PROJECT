import React from 'react';
import { motion } from 'framer-motion';

// Data
const sections = {
  hero: {
    title: "About Us",
    subtitle: "Innovating for a Better Tomorrow",
    description:
      "We are committed to excellence, innovation, and sustainability in every aspect of our business. Learn about our journey, values, and vision.",
    backgroundImage: "https://storage.needpix.com/rsynced_images/banner-1989514_1280.png", // Replace with an actual image URL
  },
  vision: "To be a global leader in delivering innovative solutions for a sustainable future.",
  mission: [
    "Empowering communities through technology.",
    "Driving excellence and innovation in every project.",
    "Fostering sustainability and long-term growth."
  ],
  coreValues: [
    { title: "Integrity", description: "We act with honesty and transparency." },
    { title: "Innovation", description: "We embrace change and creativity." },
    { title: "Sustainability", description: "We prioritize environmental responsibility." },
    { title: "Collaboration", description: "We succeed together as a team." },
  ],
  growthStrategies: [
    "Invest in R&D to drive innovation.",
    "Expand our market presence globally.",
    "Build partnerships with industry leaders.",
    "Leverage technology to enhance operations."
  ],
  qualityPolicy:
    "Our quality policy focuses on meeting customer expectations through continuous improvement and operational excellence.",
  hsePolicy:
    "We are dedicated to maintaining a safe, healthy, and environmentally conscious workplace for all our stakeholders.",
    team: [
      {
        name: "Shashi Bhushan Negi",
        role: "Managing Director",
        image: "/Dir.png",
      },
      {
        name: "Shivani Rana",
        role: "COO",
        image: "/Shivani.jpeg", // Replace with actual image URL
      },
      {
        name: "Sam Wilson",
        role: "Lead Developer",
        image: "https://via.placeholder.com/150", // Replace with actual image URL
      },
      // Add more team members as needed
    ]
};

// Component
const AboutPage = () => (
  <div className="bg-gray-50 text-gray-800 font-sans">

    {/* Hero Section */}
    <section
      className="relative text-center text-white py-32"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${sections.hero.backgroundImage}) no-repeat center center/cover`,
      }}
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {sections.hero.title}
      </motion.h1>
      <motion.p
        className="text-lg mb-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {sections.hero.subtitle}
      </motion.p>
      <motion.p
        className="text-base max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {sections.hero.description}
      </motion.p>
    </section>

    {/* Vision and Mission Section */}
    <section className="py-16 px-6 lg:px-24 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Vision & Mission
      </motion.h2>
      <motion.p
        className="text-xl mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {sections.vision}
      </motion.p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sections.mission.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white text-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p>{item}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Team Section */}
    <section className="py-16 px-6 lg:px-24 bg-gray-100">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Meet Our Team
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sections.team.map((member, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Core Values Section */}
    <section className="py-16 px-6 lg:px-24 bg-gray-100">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Core Values
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {sections.coreValues.map((value, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
            <p>{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Growth Strategies Section */}
    <section className="py-16 px-6 lg:px-24 bg-gradient-to-r from-green-500 to-yellow-500 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Growth Strategies
      </motion.h2>
      <div className="timeline relative">
        {sections.growthStrategies.map((strategy, index) => (
          <motion.div
            key={index}
            className={`mb-8 pl-8 border-l-4 ${
              index % 2 === 0 ? "border-yellow-300" : "border-green-300"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <p>{strategy}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Quality & HSE Policy */}
    <section className="py-16 px-6 lg:px-24 bg-white text-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Quality & HSE Policy
      </motion.h2>
      <motion.div
        className="max-w-4xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="mb-6">{sections.qualityPolicy}</p>
        <p>{sections.hsePolicy}</p>
      </motion.div>
    </section>
  </div>
);

export default AboutPage;
