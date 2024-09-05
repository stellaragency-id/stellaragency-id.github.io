import React from 'react';
import { Link } from 'react-router-dom';
import AnnouncementBubble from './AnnouncementBubble';
import MobileNav from './MobileNav';

function Header() {

  const links = [ 
    { to: '/', text: 'Home' }, 
    { to: '/career', text: 'Careers' }, 
    // { to: '/bigo-hosts', text: 'Bigo Hosts' },
  ];

  return (
    <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-row items-center py-[1.5rem]">
          <Link to="/" className="flex-1 text-slate-900">
            <img src="STELLAR LOGO-02.png" alt="Stellar Agency Logo" className="h-16 object-contain" />
            <span class="sr-only">Stellar Agency</span>
          </Link>
          <AnnouncementBubble title={"Referral Bonus"} description={"Refer talents and earn up to 10 million IDR!"}/>

          {/* Large Screens Navigation */}
          <div className="hidden lg:ml-8 lg:flex lg:flex-1 lg:justify-end lg:border-l lg:border-slate-900/15 lg:pl-8 lg:pr-8">
            {links.map((link, index) => (
              <Link key={index} to={link.to} className="mx-4 inline-flex hover:text-pink-500 duration-300 transition-colors">
                {link.text}
              </Link>
            ))}
          </div>

          <a href={"https://wa.me/" + process.env.REACT_APP_WHATSAPP_NUMBER} target='_blank' className="flex-none justify-end btn">
            Contact Us
          </a>

          <MobileNav links={links} />
        </div>
      </nav>
      
    </header>
  );
}

export default Header;
