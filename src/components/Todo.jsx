import React from 'react'
import NavBar from './NavBar'
import todoimg from '../assets/images/todoimg.jpg';
import TodoComponents from './TodoComponents';
const Todo = () => {
  return (
    <>
    <div>
        <NavBar title="TO DO "/>
    </div>
    <div className='flex relative max-sm:flex-col max-md:flex-col mt-10 '>
      <div className='m-auto max-sm:w-full max-md:w-full'>
       <TodoComponents/> 
      </div>
      <div className=' mx-5 max-sm:ml-0 max-sm:w-full max-xs:w-full max-md:w-full justify-center items-center'>
          <img src={todoimg} alt="todo-img" className='w-3/5 m-auto mt-10' />
      </div>
    </div>

    </>
  )
}

export default Todo