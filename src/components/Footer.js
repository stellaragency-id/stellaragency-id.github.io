import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-violet-900 p-4 text-center text-violet-50">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4 mt-2">
          <a href={process.env.REACT_APP_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl text-pink-500" />
          </a>
          <a href={'https://wa.me/' + process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-xl text-pink-500" />
          </a>
          <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl text-pink-500" />
          </a>
        </div>
        <p className="text-xs mt-2">
          Neo Soho Podomoro City Lt. 16, Jakarta, Indonesia
        </p>
        <p className="text-xs">&copy; 2024 Stellar Agency. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;