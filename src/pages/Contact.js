import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add your Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />

      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-24">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600">
          Have questions or need assistance? Get in touch with us, and we'll respond promptly.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-10 flex flex-col lg:flex-row lg:justify-between lg:space-x-10 w-full max-w-6xl">
        {/* Contact Information */}
        <div className="bg-white p-8 shadow-md rounded-lg lg:w-1/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-6">
            Reach out to us via phone, email, or visit us at our office.
          </p>
          <div className="space-y-4 text-gray-800">
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">📍</span>
              <p>123 Main Street, Noida, Sector 62</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">📞</span>
              <p>+91-12345-67890</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">📧</span>
              <p>contact@company.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-md rounded-lg lg:w-2/3 mt-8 lg:mt-0">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h3>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="4"
                className="p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
