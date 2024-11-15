import React from 'react';

const Contact = () => (
  <div className="p-10 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <p className="text-lg mb-4">Feel free to reach out to us for any inquiries or further information about our services.</p>
    <form className="max-w-md mx-auto mt-8 space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        rows="4"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;
