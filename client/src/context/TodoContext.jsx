import { createContext } from "react";


const TodoContext = createContext()

export const TodoContextProvider = ({ children }) => {

    const value = {}

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext