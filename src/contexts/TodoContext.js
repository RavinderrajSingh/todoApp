import { createContext, useContext } from "react";

export const TodoContext = createContext({

    allTodos: [
        {
            id: 1,
            todo: "Buy groceries",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleComplete: (id) => { }

});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}