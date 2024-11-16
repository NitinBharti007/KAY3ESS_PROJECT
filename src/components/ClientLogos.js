// src/components/ClientLogos.js
import React from 'react';
import Slider from 'react-slick';

const ClientLogos = () => {
  const settings = {
    dots: false,         // Disable dots for the carousel
    infinite: true,      // Infinite scroll
    speed: 500,          // Speed of transition
    slidesToShow: 5,     // Show 5 logos at once
    slidesToScroll: 1,   // Number of logos to scroll
    autoplay: true,      // Enable auto-scroll
    autoplaySpeed: 3000, // Set auto-scroll speed to 3 seconds
    arrows: true,        // Enable left and right arrows
    responsive: [
      {
        breakpoint: 1024,  // For medium screens, show 3 logos
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,  // For mobile screens, show 2 logos
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>

      {/* Slider component for carousel */}
      <Slider {...settings}>
        {/* Add logos with consistent size */}
        <div className="flex justify-center items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/NHPC_Logo_PNG_File.png" 
            alt="Client 1" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png" 
            alt="Client 2" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://presentations.gov.in/wp-content/uploads/2020/06/Power-Grid-Crop.jpg" 
            alt="Client 3" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://s3-symbol-logo.tradingview.com/adani--600.png" 
            alt="Client 4" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://download.logo.wine/logo/Bharat_Petroleum/Bharat_Petroleum-Logo.wine.png" 
            alt="Client 5" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1-x7D7ittXQFE3kv01IQBj1r3Lo-QCbh8Q&s" 
            alt="Client 6" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D0BAQGrqg-TSxrlhQ/company-logo_200_200/company-logo_200_200/0/1694599901332/cairn_india_ltd_logo?e=2147483647&v=beta&t=74i-oNopF0Bv2MgWeHmM6xbLcU17aEaxGTN6fsblcmM" 
            alt="Client 7" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://iconape.com/wp-content/files/gv/357201/svg/357201.svg" 
            alt="Client 8" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://uxdt.nic.in/wp-content/uploads/2020/06/Gail.png?x79383" 
            alt="Client 9" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://play-lh.googleusercontent.com/R2dI_pZvde2z_gUj7gH65o6E0RmMzzOfozCKS3up1M7iPgdv40vk1rpSiFcHVe388J_t=w600-h300-pc0xffffff-pd" 
            alt="Client 10" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrt7wJ1DW-CtHuPsSVCR8sfMVR8sbyUh0iw&s" 
            alt="Client 11" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D0BAQESR_6jImI3og/company-logo_200_200/company-logo_200_200/0/1697776037660/vedantapower_logo?e=2147483647&v=beta&t=083lspwH55WiFJZCEH-6KhxXncn4aqHZ9hq7N6-D-7I" 
            alt="Client 12" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/640px-Reliance_Industries_Logo.svg.png" 
            alt="Client 13" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://indiashippingnews.com/wp-content/uploads/2024/02/PETRONET-LNG.jpg" 
            alt="Client 14" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/56/Steel_Authority_of_India_logo.svg" 
            alt="Client 15" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://static.wikia.nocookie.net/logopedia/images/b/b7/DTL.jpeg/revision/latest?cb=20200430174001" 
            alt="Client 16" 
            className="w-32 h-32 object-contain transition transform hover:scale-105 duration-300"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ClientLogos;
