import React from 'react';
import envatoLogo from '../../assets/images/envato-market.svg'; 

const TopHeader = () => {
  return (
    <div
      className="w-full h-[54px] bg-[#262626] mb-[10px] flex justify-between items-center border-2 border-green-600"
    >
      {/* Left: Logo container */}
      <div
        className="h-[18px] w-[152px] text-[0px]"
        style={{
          backgroundImage: `url(${envatoLogo})`,
          backgroundSize: '152px 18px',
          backgroundRepeat: 'no-repeat',
          textIndent: '-9999px',
        }}
      >
      </div>

      {/* Right: Buy Now Button */}
      <div className="right-4 top-[10px]">
        <a
          href="#"
          className="bg-[#82b440] hover:bg-[#6fa62b] text-white font-semibold px-4 py-[6px] rounded text-sm transition duration-300"
        >
          Buy now
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
