// src/components/SlidingBanner.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css";

const SlidingBanner = () => (
  <div className="my-5 w-full relative">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      transitionTime={1000}
      interval={5000}
    >
      {/* Slide 1 */}
      <div className="relative">
        <img
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/582/small_2x/elegant-black-and-gold-banner-background-free-vector.jpg"
          alt="Innovative Technology"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
        <p className="absolute bottom-12 left-5 text-white text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider z-10 animate__animated animate__fadeIn animate__delay-1s text-shadow-xl">
          Leading Innovations in Tech
        </p>
      </div>
      {/* Slide 2 */}
      <div className="relative">
        <img
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg"
          alt="Creative Ideas"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
        <p className="absolute bottom-12 left-5 text-white text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider z-10 animate__animated animate__fadeIn animate__delay-1s text-shadow-xl">
          Creative Solutions for Growth
        </p>
      </div>
      {/* Slide 3 */}
      <div className="relative">
        <img
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          src="https://t4.ftcdn.net/jpg/04/28/76/95/360_F_428769564_NB2T4JM9E2xsxFdXXwqW717HwgaZdpAq.jpg"
          alt="Teamwork and Success"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
        <p className="absolute bottom-12 left-5 text-white text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider z-10 animate__animated animate__fadeIn animate__delay-1s text-shadow-xl">
          Empowering Teams for Success
        </p>
      </div>
    </Carousel>
  </div>
);

export default SlidingBanner;
