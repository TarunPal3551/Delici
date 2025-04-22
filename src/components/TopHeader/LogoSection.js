import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/4e2d9bdc-b9a3-4b38-afab-df8ae6555c80.svg';

const HeaderLogoSection = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-black text-white shadow-md">

      {/* Left side: empty div to help with centering */}
      <div className="w-1/3"></div>

      {/* Center Logo */}
      <div className="w-1/3 flex justify-center">
        <Link to="/">
          <img src={logo} alt="Delici Restaurant" className="h-10 md:h-12" />
        </Link>
      </div>

      {/* Buy Now Button */}
      <div className="w-1/3 flex justify-end">
        <a
          href="#"
          className="px-4 py-2 rounded text-sm uppercase tracking-wider text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          style={{ backgroundColor: '#82b440' }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6fa432')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#82b440')}
        >
          Buy Now
        </a>
      </div>

    </header>
  );
};

export default HeaderLogoSection;
