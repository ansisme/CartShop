import React from 'react'
import contactus from '../assets/images/contactus.jpg'
import NavBar from './NavBar';
import ContactForm from './ContactForm';
const Contact = () => {
    return (
      <>
        <div>
          <NavBar title="CartSHOP" />
        </div>
        <div className='flex mt-10 justify-between items-center max-sm:flex-col max-md:flex-col'>
        <div className='w-1/2 max-sm:w-full max-xs:w-full max-md:w-full'>
            <div>
              <h3 className='p-9 font-bold text-[72px] max-sm:text-[28px] max-xs:text-[24px] max-md:text-[32px] text-blueBlack'>Contact us!</h3>
            </div>
            <div className='flex-col items-center max-sm:w-full max-md:w-full
            max-lg:w-full'>
              <p className='px-10 max-sm:px-9 max-xs:px-9 max-md:px-9 max-sm:text-[16px] max-xs:text-[14px] text-lighGrey text-[24px] font-medium'>
                Submit your query and we will get back to you in 24 hours!
              </p>
              <div className='p-9 max-sm:p-5 flex-col items-start justify-end max-sm:w-full'>
                <ContactForm />
              </div>

            </div>
          </div>
          <div className='w-[45%] max-sm:w-full max-xs:w-full max-md:w-full max-lg:w-full '>
            <img src={contactus} alt='cart' className='custom-bounce' />
          </div>


        </div>
      </>
    );
  };

export default Contact;
