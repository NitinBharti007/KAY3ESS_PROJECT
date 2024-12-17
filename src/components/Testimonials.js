// src/components/Testimonials.js
import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "Outstanding service and results! I would highly recommend them for any tech solutions.",
    image: "https://via.placeholder.com/150/FFB6C1/000000?text=Jane+Doe",
  },
  {
    name: "John Smith",
    feedback: "The best experience I've had with a tech team! Professional and reliable.",
    image: "https://via.placeholder.com/150/FFB6C1/000000?text=John+Smith",
  },
  {
    name: "Alice Johnson",
    feedback: "Incredible results! Their attention to detail and commitment to success is unmatched.",
    image: "https://via.placeholder.com/150/FFB6C1/000000?text=Alice+Johnson",
  },
  {
    name: "Bob Williams",
    feedback: "A phenomenal team that helped us achieve our business goals. Highly recommended!",
    image: "https://via.placeholder.com/150/FFB6C1/000000?text=Bob+Williams",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue text-center">
      <div className="max-w-screen-xl mx-auto px-7">
        {/* Title with Animation */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">What Our <span className="text-blue-600">Clients</span> Say
    </h2>

        {/* Testimonials Carousel */}
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl shadow-none hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                />
              </div>
              <p className="text-lg text-gray-700 italic mb-4">{`"${testimonial.feedback}"`}</p>
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
