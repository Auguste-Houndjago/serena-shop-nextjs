'use client'

import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = '+28898576682';
  const message = encodeURIComponent("Bonjour, j'aimerais acheter cet article.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <button className='block hover:scale-105 border  bg-transparent'
      onClick={() => window.open(whatsappUrl, '_blank')}
    >
      
         <FaWhatsappSquare className='w-10 h-10 bg-green-600 text-[#5D366] rounded-sm  ' />
    </button>
  );
};

export default WhatsAppButton;