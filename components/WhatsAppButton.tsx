import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+28898576682';
  const message = encodeURIComponent("Bonjour, j'aimerais acheter cet article.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <button 
      onClick={() => window.open(whatsappUrl, '_blank')}
      style={{
        backgroundColor: '#25D366',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '15px',
        width:'100%',
    
        


      }}
    >
         WhatsApp
    </button>
  );
};

export default WhatsAppButton;