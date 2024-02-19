import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWA = () => {
  const openWhatsAppChat = () => {
    // Replace 'PHONE_NUMBER' and 'MESSAGE' with your actual WhatsApp number and message
    const phoneNumber = "PHONE_NUMBER";
    const message = "MESSAGE";

    // Create a WhatsApp URL with the phone number and message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${923145154682}&text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp chat in a new window or tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="floating-whatsapp-button" onClick={openWhatsAppChat}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default FloatingWA;
