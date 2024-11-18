// src/components/ClientLogosCarousel.js
import React from "react";
import Slider from "react-slick";

const ClientLogosCarousel = () => {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/8/82/NHPC_Logo_PNG_File.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png",
    "https://presentations.gov.in/wp-content/uploads/2020/06/Power-Grid-Crop.jpg",
    "https://s3-symbol-logo.tradingview.com/adani--600.png",
    "https://download.logo.wine/logo/Bharat_Petroleum/Bharat_Petroleum-Logo.wine.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1-x7D7ittXQFE3kv01IQBj1r3Lo-QCbh8Q&s",
    "https://media.licdn.com/dms/image/v2/D4D0BAQGrqg-TSxrlhQ/company-logo_200_200/company-logo_200_200/0/1694599901332/cairn_india_ltd_logo?e=2147483647&v=beta&t=74i-oNopF0Bv2MgWeHmM6xbLcU17aEaxGTN6fsblcmM",
    "https://iconape.com/wp-content/files/gv/357201/svg/357201.svg",
    "https://uxdt.nic.in/wp-content/uploads/2020/06/Gail.png?x79383",
    "https://play-lh.googleusercontent.com/R2dI_pZvde2z_gUj7gH65o6E0RmMzzOfozCKS3up1M7iPgdv40vk1rpSiFcHVe388J_t=w600-h300-pc0xffffff-pd",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrt7wJ1DW-CtHuPsSVCR8sfMVR8sbyUh0iw&s",
    "https://media.licdn.com/dms/image/v2/D4D0BAQESR_6jImI3og/company-logo_200_200/company-logo_200_200/0/1697776037660/vedantapower_logo?e=2147483647&v=beta&t=083lspwH55WiFJZCEH-6KhxXncn4aqHZ9hq7N6-D-7I",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/640px-Reliance_Industries_Logo.svg.png",
    "https://indiashippingnews.com/wp-content/uploads/2024/02/PETRONET-LNG.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Steel_Authority_of_India_logo.svg",
    "https://media.licdn.com/dms/image/v2/C4D0BAQFY_xU43a3mdw/company-logo_200_200/company-logo_200_200/0/1650054503721/delhi_transco_ltd__logo?e=2147483647&v=beta&t=UzpsLj_JvRbsmYtWWOaZ6dqRiQzkx166jXOyC_lNUl4",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full py-8 bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
      Our <span className="text-blue-600">Esteemed</span> Client
    </h2>
      <div className="mx-auto">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-full h-20 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientLogosCarousel;
