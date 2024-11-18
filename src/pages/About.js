import React from 'react';
import { motion } from 'framer-motion'; // For animations

const corporateOverview = {
  title: "Corporate Overview",
  content: `
    KAY3ESS Systems Private Limited is one of India’s growing companies in the field of providing services 
    in the Industrial, Defense, Oil & Gas, Railway, Solar, and Power Sectors. KAY3ESS is promoted by a group of professionals 
    having vast experience in these fields. KAY3ESS is incorporated with ROC under the Ministry of Corporate Affairs in India to 
    cater to the needs and provide customized solutions in these sectors.
    
    KAY3ESS offers sustained solutions for special customer needs through a comprehensive range of services and innovative ideas 
    on aspects of Installation & Commissioning and Operation & Maintenance practices. This allows us to make an important contribution 
    to environmental protection and the enhanced quality of operation & servicing of DC systems.
    
    KAY3ESS is a full-spectrum Installation & Commissioning, O&M, Work contract, AMC, and spare support provider company that serves 
    sectors such as Power (Generation, Transmission & Distribution), Oil & Gas (Plant, Refinery, Pipelines), Railway & Metro. 
    We also provide consulting services using our domain expertise and technical know-how.
    
    KAY3ESS provides engineering services across various industries, including Pipelines, Refineries, Telecom, Metro & Terminals, 
    Thermal & Nuclear Power, Petrochemical, Chemical, Sugar, and Gas industries. Our services cater to the entire lifecycle of projects, 
    from feasibility studies to decommissioning and abandonment studies at the end of an asset’s life.
    
    The company has a transnational and multicultural workforce of over 40 technical professionals dedicated to delivering the 
    highest standards of service.
  `,
};

const visionAndMission = {
  vision: "To be a leading global service provider in O&M & consulting, delivering innovative business solutions and technology to customers.",
  mission: [
    "Being customer focused and offering better deliverable service solutions.",
    "Utilizing India's engineering knowledge, skills, and talents, upgrading our resources, good O&M practices (GOP), and quality systems continuously.",
    "Organizing to deploy the most advanced eco-friendly services, practicing Better Environmental Sustainable Targets (BEST), and ensuring safety and well-being of our employees and community.",
    "To work towards ‘customer delight’ by harnessing best-in-class talent, creating a knowledge pool, and implementing proven processes to become a preferred partner."
  ]
};

const coreValues = [
  { title: "Performance", description: "We are here to make a valuable difference to our stakeholders and we will make it happen against all odds." },
  { title: "Passion", description: "We are differentiated by our ‘Can Do’ attitude and the fire in our belly." },
  { title: "Team Work", description: "We can gain from the diversity within our Group by sharing knowledge and resources to achieve individual and collective success." },
  { title: "Agility", description: "We understand stakeholder needs and respond with speed and precision." },
  { title: "Reliability", description: "We are trustworthy and reliable, in both thought and action. Our customers can count on us to deliver, always." }
];

const qualityPolicy = {
  policy: `
    KAY3ESS is committed to providing reliable services and solutions and to continual improvement in Quality of O&M practices to achieve enhanced Customer Satisfaction by:
    
    - Working closely with customers
    - Developing and applying new cost-effective ideas
    - Ensuring involvement and active participation of all employees
    
    Quality Objectives: This shall be achieved by:
    
    - Ensuring compliance of process at all stages.
    - Improving quality levels and consistency through process controls/improvements.
    - Achieving total customer satisfaction through Total Quality Management systems.
    - Improving reliability of the customer support.
  `
};

const growthStrategies = [
  "Leverage the most from the robust growth in Industrial and Power infrastructure spends",
  "Capitalize on the experience of timely delivery of projects with complete dependability",
  "Capitalize on the knowledge bank built over the last 15 years",
  "125+ strong talent pool, capable of meeting individual requirements and deliver customized solutions",
  "Inorganic growth strategy as a route to exponential growth in future",
  "Procure new business from telecom, power equipment majors worldwide by maintaining quality of delivery and competitiveness"
];

const businessPositives = [
  "Services being offered across the value chain, so as to cater all type of customers",
  "Services and solutions offered from conceptualization to implementation to maintenance",
  "High entry barriers – Reasonably high entry barriers for new entrants in terms of positioning on the learning curve and client acquisition capabilities",
  "Presence of over one and a half decade provides a competitive edge in execution capabilities",
];

const hsePolicy = `
  KAY3ESS provides services essential for a rapidly evolving global economy. We, however, firmly believe that growth should be well harmonized with “people first” policies, environmental conservation and social well-being. 
  In order to be a responsible corporate citizen and a partner of choice across the globe, the company upholds the highest standards of health, safety and environment management – an intrinsic value system which forms the core of our corporate governance. 
  Our constant and collective efforts for ensuring incident-free operations, fail proof risk management and a cleaner, safer environment have paid rich dividends over the decades, leading to better growth opportunities and enhanced trust.
  The company has a well-defined HSE Policy to ensure safe working conditions, better health preservation and protection of the pristine environment across diverse and widespread operational areas.
  We abide by all relevant health, safety and environmental laws/regulations and adhere to most viable operating policies and procedures.
  Our HSE Management System not only focuses on safe working practices but also highlights the roles and responsibilities of all our team members working proactively to ensure HSE excellence.
  We call on their active support, co-operation and participation so that safety and environment may remain the first priority throughout the organisation.
`;

const AboutPage = () => (
  <div className="bg-gradient-to-r from-gray-50 to-blue-100 text-gray-800 font-sans">

    {/* Corporate Overview Section */}
    <section className="py-20 px-8 lg:px-24 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl shadow-xl mb-16 transform hover:scale-105 transition-all duration-500">
      <motion.h2
        className="text-4xl lg:text-5xl font-extrabold text-center mb-6 text-yellow-300 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {corporateOverview.title}
      </motion.h2>
      <motion.p
        className="text-lg lg:text-xl leading-relaxed text-gray-100 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {corporateOverview.content}
      </motion.p>
    </section>

    {/* Vision Section */}
    <section className="py-20 px-8 lg:px-24 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-xl shadow-xl mb-16">
      <motion.h2
        className="text-4xl lg:text-5xl font-extrabold text-center mb-6 text-yellow-200 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Vision
      </motion.h2>
      <motion.p
        className="text-lg lg:text-xl font-medium text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {visionAndMission.vision}
      </motion.p>
    </section>

    {/* Mission Section */}
    <section className="py-20 px-8 lg:px-24 text-center bg-white shadow-2xl rounded-xl mb-16">
      <motion.h2
        className="text-4xl lg:text-5xl font-extrabold mb-8 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Our Mission
      </motion.h2>
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {visionAndMission.mission.map((item, index) => (
          <motion.div
            key={index}
            className="mb-6 text-lg lg:text-xl leading-relaxed text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
          >
            <p className="font-medium">{item}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Core Values Section */}
    <section className="py-20 px-8 lg:px-24 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-center rounded-xl shadow-xl mb-16">
      <motion.h2
        className="text-4xl lg:text-5xl font-extrabold text-center mb-6 text-yellow-200 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Core Values
      </motion.h2>
      <motion.p
        className="text-lg lg:text-xl leading-relaxed text-gray-100 mb-8 mx-auto max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        To realize our vision and mission, we always turn to the corporate values that we hold dear. We will live and deliver these values with uncompromising commitment to safety and sustainability.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white shadow-lg rounded-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
            <p className="text-base text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Quality Policy Section */}
    <section className="py-20 px-8 lg:px-24 bg-white shadow-xl rounded-xl mb-16">
      <motion.h2
        className="text-4xl lg:text-5xl font-extrabold text-center mb-6 text-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Quality Policy
      </motion.h2>
      <motion.p
        className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {qualityPolicy.policy}
      </motion.p>
    </section>

    {/* Growth Strategies Section */}
    <section className="py-20 px-8 lg:px-24 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center rounded-xl shadow-xl mb-16">
      <motion.h2
        className="text-4xl lg:text-5xl font-extrabold text-center mb-6 text-yellow-300 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Growth Strategies
      </motion.h2>
      <motion.ul
        className="list-disc text-lg lg:text-xl leading-relaxed text-gray-100 mb-8 mx-auto max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {growthStrategies.map((strategy, index) => (
          <motion.li
            key={index}
            className="mb-4 text-lg lg:text-xl text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
          >
            {strategy}
          </motion.li>
        ))}
      </motion.ul>
    </section>

    {/* Business Positives Section */}
    <section className="py-20 px-8 lg:px-24 bg-white shadow-xl rounded-xl mb-16">
      <motion.h2
        className="text-4xl lg:text-5xl font-extrabold text-center mb-6 text-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Business Positives
      </motion.h2>
      <motion.ul
        className="list-disc text-lg lg:text-xl leading-relaxed text-gray-700 mb-8 mx-auto max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {businessPositives.map((positive, index) => (
          <motion.li
            key={index}
            className="mb-4 text-lg lg:text-xl text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
          >
            {positive}
          </motion.li>
        ))}
      </motion.ul>
    </section>

    {/* HSE Policy Section */}
    <section className="py-20 px-8 lg:px-24 bg-gradient-to-r from-green-500 to-yellow-500 text-white text-center rounded-xl shadow-xl mb-16">
      <motion.h2
        className="text-4xl lg:text-5xl font-extrabold text-center mb-6 text-yellow-200 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Health, Safety, and Environmental Policy
      </motion.h2>
      <motion.p
        className="text-lg lg:text-xl leading-relaxed text-gray-100 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {hsePolicy}
      </motion.p>
    </section>

  </div>
);

export default AboutPage;
