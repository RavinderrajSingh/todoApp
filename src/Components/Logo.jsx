import React from 'react'
import todos from '../assets/todos.png'

function Logo() {
    return (
        <div className='m-2 flex items-center justify-center cursor-pointer w-full mb-3'>

            <img src={todos} alt="" className=' size-10 left-0 md:size-14 lg:size-16' />
            <h1 className='mx-2 font-bold md:text-xl lg:text-2xl'>MANAGE YOUR TODOS</h1>
            
        </div>
    )
}

export default Logo