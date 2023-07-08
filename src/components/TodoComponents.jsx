/* eslint-disable no-lone-blocks */
import React, {useState, useEffect} from 'react'
import { Icon } from '@iconify/react';
import {v4 as uuidv4} from 'uuid'
const TodoComponents = () => {

//storing in our local storage
const initialState = JSON.parse(localStorage.getItem("todos")) || [];
const [input, setInput] = useState("");
const [edit, setEdit] = useState(null);
const [todos, setTodos] = useState(initialState);

useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
},[todos]);
const handleSubmit=(event)=>{
    event.preventDefault();
    if(!edit){
        setTodos([...todos, {id:uuidv4(), title: input, completed: false}]);
        setInput("");
    }else{
    updateTodo(input, edit.id, edit.completed)
    }
    
}
const onInputChange=(event)=>{
    setInput(event.target.value);
}

const handleDelete=({id})=>{
    setTodos(todos.filter(todos=>todos.id!==id));
}

const handleComplete=(todo)=>{
    setTodos(
        todos.map((item)=>{
            if(item.id===todo.id){
                return {...item, completed: !item.completed}
            }
            return item;
        })
    )
}

const handleEdit=({id})=>{
    const findTodo = todos.find(todo=>todo.id===id);
    setEdit(findTodo);
}

const updateTodo =(title, id, completed)=>{
    const newTodo = todos.map((todo)=>
        todo.id ===id ? {title, id, completed} : todo
    )
    setTodos(newTodo);
    setEdit(null);
}

useEffect(()=>{
    if(edit){
        setInput(edit.title);
    }else{
        setInput("");
    }
},[setInput, edit]);


//displaying total and completed tasks
const totalTasks = todos.length;
const completedTasks = todos.filter((todo) => todo.completed).length;

return (
    <div className='bg-standardBg rounded-2xl max-sm:mx-8 max-xs:mx-8 p-5 max-sm:p-3 mx-10'>
        <h2 className='font-semibold text-[32px] max-sm:text-[16px] text-center'>Todo List</h2>
        <div>
        <form onSubmit={handleSubmit} className='flex'>
        <div className='flex'>
        <input 
            type="text" 
            placeholder='Enter Todo' 
            value= {input} 
            onChange={onInputChange}
            className='m-4 p-2 max-xs:p-1 w-full flex rounded-md focus:ring-Addbtn max-sm:text-[14px] max-xs:text-[12px] max-md:text-[16px]'
            required />
        </div>
           <div>
           <button className=' m-4 p-2 flex hover:bg-[#ffb9b9] rounded-lg font-medium bg-iconsColors max-sm:text-[14px] max-xs:text-[12px] max-md:text-[16px]'>
                {edit?"OK": "ADD" }
            </button>
           </div>
            
        </form>
        </div>
       
        <div className='flex-col'>
            {todos.map((todo)=> (
                <li key={todos.id} className='list-none p-2'>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => handleComplete(todo)}
                    className='mr-8 accent-iconsColors max-xs:m-0 '
                    />

                    <input 
                    type='text'
                    value={todo.title}
                    onChange={(event)=>event.preventDefault()} 
                    className={` ${todo.completed ? 'line-through text-Addbtn' : ''} p-1.5 rounded-md  font-normal mr-5 max-sm:w-full max-sm:mx-3 max-sm:my-3
                    max-xs:w-full max-xs:mx-3 max-xs:my-3
                     max-sm:text-[14px] max-xs:text-[12px] max-md:text-[16px]`}
                    />

                    <button>
                        <Icon icon="material-symbols:edit-outline" 
                        onClick={()=>{
                            handleEdit(todo);
                        }}
                        className='mr-3 ml-3 text-Addbtn hover:text-[#004080]'
                        />                    
                    </button>
                    <button>
                        <Icon icon="material-symbols:delete-outline" 
                        onClick={()=>{
                            handleDelete(todo)
                        }}
                        className='ml-3 text-black hover:text-delete'
                        />                    
                    </button>
                </li>
            ))}
        </div>
        <div className='text-center mt-10 flex max-sm:text-[14px] max-xs:text-[12px] max-md:text-[16px]'>
        <p className=' w-1/2 max-sm:w-full'>Total Tasks: {totalTasks}</p>
        <p className='mr-8 w-1/2  max-sm:w-full max-xs:ml-8 justify-center items-center'> Completed Tasks: {completedTasks}</p>
      </div>
    </div>
  )
}

export default TodoComponents


          