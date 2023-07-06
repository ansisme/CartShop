import React from 'react';

const NavBar = ({ title, shopColor, bestColor }) => {
  return (
    <>
      <div className='font-extrabold pl-7 text-[32px] bg-white  flex ml-auto cursor-pointer relative mt-3'>
        <div className='font-medium w-1/2 flex items-center pl-3'>
          <span className={`text-${shopColor}`}>{title.split(' ')[0]}</span>
          <span className={`${bestColor}`}>{title.split(' ')[1]}</span>
        </div>
        <div className='flex text-[20px] m-auto relative'>
          <div className='p-3 font-medium hover:bg-standardBg text-[#110f1a] hover:rounded-2xl'>
            <a href='/'>Home</a>
          </div>
          <div className='p-3 font-medium hover:bg-standardBg text-[#110f1a] hover:rounded-2xl'>
            <a href='/about'>About</a>
          </div>
          <div className='p-3 font-medium hover:bg-standardBg text-[#110f1a] hover:rounded-2xl'>
            <a href='contact'>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
