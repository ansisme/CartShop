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
        <div className='w-1/2'>
          <div>
            <h1 className='p-9 font-bold text-[72px] text-[#110f1a]'>
              Welcome to <span className='pl-3 text-iconsColors hover:text-Addbtn'>Cart</span><span className='pl-3 text-Addbtn hover:text-iconsColors'>SHOP</span>
            </h1>
          </div>
          <div>
            <p className='pl-10 text-[#b4b4b4] text-[24px] font-medium'>
              Explore the benefits of shopping + Todo List 
            </p>
            <p className='pl-10 text-[#b4b4b4] text-[24px] font-medium'>
             Facing issues to keep track of your shopping?
             Dont worry, we are here to help you!
            </p>
            <div className='flex p-8'>
            <div className='w-1/2 flex '>
            <button className='bg-standardBg flex p-2 rounded-lg hover:bg-Addbtn hover:text-white font-medium text-[24px]'>
            <a href='/todo' className='flex pl-4'>
            TODO<span className='p-2'><Icon icon="ph:arrow-right" /></span>
            </a>
            
            </button>
            </div>
            
            <div className='w-1/2 flex text-center justify-center'>
            <button className='flex bg-standardBg p-2 rounded-lg hover:bg-Addbtn hover:text-white font-medium text-[24px]'>
            <a href='/cart' className='flex pl-4'>
            SHOPBEST<span className='p-2'><Icon icon="ph:arrow-right" /></span>
            </a>            </button>
            </div>
            </div>
            
          </div>
          
        </div>

        <div className='w-1/2 items-center'>
          <img src={homepageIMG} alt='cart' className='w-4/5 custom-bounce' />
        </div>
      </div>
      </>
      )
}

export default Home