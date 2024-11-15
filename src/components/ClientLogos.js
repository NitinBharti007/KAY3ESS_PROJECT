// src/components/ClientLogos.js
import React from 'react';

const ClientLogos = () => (
  <div className="p-10 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
    <div className="flex justify-around">
      <img src="/images/client1.png" alt="Client 1" className="w-32 h-auto" />
      <img src="/images/client2.png" alt="Client 2" className="w-32 h-auto" />
      <img src="/images/client3.png" alt="Client 3" className="w-32 h-auto" />
    </div>
  </div>
);

export default ClientLogos;
