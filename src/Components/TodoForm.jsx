import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {

    const [todo, setTodo] = useState('');
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;

        addTodo({ todo, completed: false })
        
        setTodo('');
    }

    return (

        <form
            className='flex mt-5 w-full items-center justify-center mb-5'
            onSubmit={add}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter Task ..'
                className='bg-slate-600 py-2 w-[60%] mr-4 outline-none border-none text-xl px-2 lg:text-2xl sm:text-lg'
            />
            <button
                type='submit'
                className='bg-green-600 hover:bg-green-500 rounded-lg w-[15%] py-2 font-bold outline-none text-xl lg:text-2xl sm:text-lg '
            >
                Add
            </button>
        </form>

    )
}

export default TodoForm