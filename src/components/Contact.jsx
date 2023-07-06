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
          <div className='w-1/2 '>
            <div>
              {/* <h3 className='pl-9 font-semibold text-[52px] text-blueBlack'>Contact us!</h3> */}
            </div>
            <div className='p-9 flex-col items-center max-sm:w-full max-md:w-full
            max-lg:w-full'>
              <p className='pl-9 pt-5 text-[18px] items-center font-normal flex-col'>
                Submit your query and we will get back to you in 24 hours!
              </p>
              <div className='m-9 flex-col items-start justify-end max-sm:w-full'>
                <ContactForm />
              </div>

            </div>
          </div>
          <div className='w-[45%] max-sm:w-full max-md:w-full max-lg:w-full '>
            <img src={contactus} alt='cart' className='custom-bounce' />
          </div>


        </div>
      </>
    );
  };

export default Contact;
