import React from 'react'
import NavBar from './NavBar'
import todoimg from '../assets/images/todoimg.jpg';
import Todo from './Todo';
const Home = () => {
  return (
    <>
    <div>
        <NavBar/>
    </div>
    <div className='flex relative max-sm:flex-col max-md:flex-col mt-10'>
      <div className='m-auto'>
       <Todo/> 
      </div>
      <div className=' ml-5'>
          <img src={todoimg} alt="todo-img" className='w-3/5 m-auto mt-10' />
      </div>
    </div>

    </>
  )
}

export default Home