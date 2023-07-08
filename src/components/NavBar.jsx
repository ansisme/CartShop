import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = ({ title, shopColor, bestColor }) => {
  return (
    <>
      <div className='font-extrabold pl-7 max-sm:pl-3 max-xs:pl-3  max-md:pl-3  text-[32px] max-sm:text-[18px] max-xs:text-[16px] max-md:text-[24px] flex ml-auto cursor-pointer relative mt-3'>
        <div className='font-medium w-1/2 max-sm:w-full flex items-center pl-3'>
        <Link to="/" >
          <span className={`text-${shopColor}`}>{title.split(' ')[0]}</span>
          <span className={`${bestColor}`}>{title.split(' ')[1]}</span>
        </Link>
     
        </div>
        <div className='flex text-[20px] max-sm:text-[16px] max-xs:text-[12px] max-md:text-[18px] m-auto relative'>
          <div className='p-3 max-sm:p-2 font-medium hover:bg-standardBg text-[#110f1a] hover:rounded-2xl'>
            <a href='/'>Home</a>
          </div>
          <div className='p-3 max-sm:p-2 font-medium hover:bg-standardBg text-[#110f1a] hover:rounded-2xl'>
            <a href='/about'>About</a>
          </div>
          <div className='p-3 max-sm:p-2 font-medium hover:bg-standardBg text-[#110f1a] hover:rounded-2xl'>
            <a href='contact'>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
