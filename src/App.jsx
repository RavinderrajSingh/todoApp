import React, { useEffect, useState } from 'react'
import Logo from './Components/Logo'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import { TodoContextProvider } from './contexts/TodoContext'

function App() {

  const [allTodos, setAllTodos] = useState([]);

  const addTodo = (todo) => {
    setAllTodos((prev) => [...prev, { id: Date.now(), ...todo }])
    // console.log(allTodos);
  }

  const updateTodo = (id, todo) => {
    setAllTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setAllTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id)) // make a new array without element whose id is matching those who dont match will not be removed
  }

  const toggleComplete = (id) => {
    setAllTodos(
      (prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    );
  }

  useEffect(() => {

    const allTodos = JSON.parse(localStorage.getItem('allTodos'));

    if (allTodos && allTodos.length > 0) {
      setAllTodos(allTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('allTodos', JSON.stringify(allTodos));
  }, [allTodos]);


  return (

    <TodoContextProvider value={{ allTodos, updateTodo, deleteTodo, addTodo, toggleComplete }}>
      <div className='flex items-center justify-center flex-col w-full'>

        <Logo />
        <TodoForm />

        <div className='space-y-2 w-full flex items-center flex-col'>



          {
            allTodos.map((todo) => (
              <div key={todo.id}
                className='w-full flex items-center justify-center flex-col'>
                <TodoItem todo={todo} />
              </div>
            ))
          }

        </div>

      </div>
    </TodoContextProvider>
  )
}

export default App