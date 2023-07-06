import React from 'react'
import about from '../assets/images/about.jpg'
import { Icon } from '@iconify/react';
import NavBar from './NavBar';
const About = () => {
  return (
    <>
    <div>
      <NavBar title="CartSHOP"/>
    </div>
    <div className='flex mt-10 justify-between items-center max-sm:flex-col max-md:flex-col'>
        <div className='w-1/2'>
          <div>
           
            <h3 className='pl-9 font-semibold text-[52px] text-blueBlack'>Who are we?</h3>
          </div>
          <div>
            <p className='pl-10 pt-5 text-[20px] font-normal'>Your Fun {' '}
           <span className='text-iconsColors font-semibold'>ToDo List </span>{' '}+ <span className='text-Addbtn font-semibold'>Shopping Website</span>
            
            </p>
            <div className='bg-standardBg rounded-xl m-9 flex justify-center items-center max-sm:w-full'>
              <p className='p-2 pt-5 text-[18px] font-normal'>
                CartSHOP is your go-to destination for a seamless and enjoyable shopping experience. We've combined the convenience of online shopping with a ToDo list feature to make your shopping journey fun and productive.
                With CartSHOP, you can shop for your wardrobe essentials and stay organized with tasks and goals. Discover trendy items, stay on top of your daily tasks, and enjoy exclusive discounts and offers along the way.
                Our user-friendly interface ensures a seamless browsing and shopping experience. Plus, our dedicated customer support team is here to assist you every step of the way.
                Join CartSHOP today and redefine how you shop and organize your life. Elevate your wardrobe, conquer your tasks, and have fun while doing it all with CartSHOP!
                Note: This is a condensed version of the description. Feel free to further customize it to match your brand's tone and style.
              </p>
            </div>
          </div>
        </div>

        <div className='w-1/2 items-end max-sm:w-full flex justify-center'>
  <img src={about} alt='cart' className='custom-bounce' />
</div>

      </div>
      </>
      )
}

export default About