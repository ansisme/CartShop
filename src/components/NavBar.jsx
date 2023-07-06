import React from 'react';
import todoimg from '../assets/images/todoimg.jpg';
const NavBar = () => {
  return (
    //NavBar component
    <>
    <div className='w-1/2 h-5 bg-white flex ml-auto cursor-pointer relative mt-3'>
      <div className=' flex text-[20px] m-auto relative'>
        <div className='p-3 font-medium hover:bg-standardBg hover:rounded-2xl'>
          <a href="/">Home</a>
        </div>
        <div className='p-3 font-medium hover:bg-standardBg hover:rounded-2xl'>
          <a href="/about">About</a>
        </div>
        <div className='p-3 font-medium hover:bg-standardBg hover:rounded-2xl'>
          <a href="contact">Contact</a>
        </div>
      </div>
    </div>

    {/* img componenet */}
       {/* <div className='w-1/2 flex-col p-10 relative flex ml-auto'>
          <img src={todoimg} alt="todo-img" className='w-3/4 m-auto mt-10' />
       </div> */}
    </>
  )
}

export default NavBar