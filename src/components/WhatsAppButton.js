// src/components/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/11234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all animate-pulse"
  >
    <FaWhatsapp size={30} />
  </a>
);

export default WhatsAppButton;
