import React from 'react'
import homepageIMG from '../assets/images/homepageIMG.jpg'
import { Icon } from '@iconify/react';
import NavBar from './NavBar';
const Home = () => {
  return (
    <>
    <div>
      <NavBar title="CartSHOP"/>
    </div>
    <div className='flex mt-10 justify-between items-center max-sm:flex-col max-md:flex-col'>
        <div className='w-1/2 max-sm:w-full max-xs:w-full max-md:w-full'>
          <div classname='flex '>
            <h1 className='p-9 font-bold text-[72px] max-sm:text-[28px] max-xs:text-[24px] max-md:text-[32px] max-lg:text-[55px] text-blueBlack'>
              Welcome to <span className='pl-3 max-sm:pl-0 text-iconsColors hover:text-Addbtn'>Cart</span><span className='pl-3 text-Addbtn hover:text-iconsColors'>SHOP</span>
            </h1>
          </div>
          <div>
            <p className='px-10 max-sm:px-9 max-xs:px-9 max-md:px-9 max-sm:text-[16px] max-xs:text-[14px] text-lighGrey text-[24px] font-medium'>
              Explore the benefits of Shopping + Todo List 
            </p>
            <p className='px-10 max-sm:px-9 max-xs:px-9 max-md:px-9 max-sm:text-[16px] max-xs:text-[14px] text-lighGrey text-[24px] font-medium'>
             Facing issues to keep track of your shopping?
             Dont worry, we are here to help you!
            </p>
            <div className='flex p-10'>
            <div className='w-1/2 flex max-sm:w-full text-center justify-center max-lg:pr-10 max-sm:pr-5'>
            <button className='bg-standardBg flex p-2 max-sm:p-2 rounded-lg hover:bg-Addbtn hover:text-white font-medium text-[24px] max-sm:text-[16px] max-xs:text-[14px] max-md:text-[20px]'>
            <a href='/todo' className='flex px-4 max-sm:px-0 justify-between items-center'>
            TODO<span className='p-2'><Icon icon="ph:arrow-right" /></span>
            </a>
            
            </button>
            </div>
            
            <div className='w-1/2 flex max-sm:w-full text-center justify-center max-lg:pl-10 max-sm:pl-0'>
            <button className='bg-standardBg flex p-2 max-sm:p-2 rounded-lg hover:bg-Addbtn hover:text-white font-medium text-[24px] max-sm:text-[16px] max-xs:text-[14px] max-md:text-[20px]  '>
            <a href='/cart' className='flex px-4 max-sm:px-0 justify-between items-center'>
            SHOPBEST<span className='p-2'><Icon icon="ph:arrow-right" /></span>
            </a></button>
            </div>
            </div>
            
          </div>
          
        </div>

        <div className='w-1/2 items-center'>
          <img src={homepageIMG} alt='cart' className='w-4/5 max-sm:w-full max-xs:w-full max-md:w-full custom-bounce' />
        </div>
      </div>
      </>
      )
}

export default Home