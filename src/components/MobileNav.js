import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="flex flex-none mx-auto h-8 w-8 items-center justify-end lg:hidden" onClick={toggleDropdown}>
        <span className="sr-only">Open navigation</span>
        <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
          <path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
      </button>

      {/* Full Width Dropdown Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-1 bg-white shadow-lg trnasition-all duration-300 ease-in-out">
          <div className="space-y-4 py-8 px-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="block text-lg px-4 py-2 hover:text-pink-500 duration-300 transition-colors"
                onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>

  );
};

export default MobileNav;
