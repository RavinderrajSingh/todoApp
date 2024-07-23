import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {


    const { updateTodo, deleteTodo, toggleComplete } = useTodo();
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [isEditable, setIsEditable] = useState(false);


    const deleteMe = () => {
        deleteTodo(todo.id);
    }

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsEditable(false);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }


    return (
        <div className={`flex items-center bg-gray-700 rounded-lg w-[80%] p-2 `}>

            <input
                type="checkbox"
                className='mr-4 size-5 cursor-pointer'
                checked={todo.completed}
                onChange={toggleCompleted}
            />

            <input
                type="text"
                value={todoMsg}
                readOnly={!isEditable}
                onChange={(e) => setTodoMsg(e.target.value)}
                className={` w-[90%]  bg-transparent outline-none border-none mr-2 sm:text-lg md:text-xl lg:text-2xl rounded-lg md:rounded-xl 
                    ${todo.completed ? "line-through text-gray-500 font-thin" : ""}  ${isEditable ? "bg-slate-500 p-2 bg-opacity-1" : ""  }    `}
            />


            <button
                className="ml-5 text-lg md:text-xl lg:text-2xl bg-gray-300 bg-opacity-5 p-2 rounded-xl hover:bg-opacity-[0.09]"
                onClick={

                    () => {
                        if (isEditable) editTodo();
                        else setIsEditable((prev) => !prev)
                    }
                }
                disabled={todo.completed}

            >
                {isEditable ? "📁" : "✏️"}
            </button>


            <button
                className='ml-2 text-lg md:text-xl lg:text-2xl bg-gray-300 bg-opacity-5 p-2 rounded-xl hover:bg-opacity-[0.09]'
                onClick={deleteMe}
            >
                ❌
            </button>

        </div>
    )
}

export default TodoItem