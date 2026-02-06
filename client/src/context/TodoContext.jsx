import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const TodoContext = createContext()

export const TodoContextProvider = ({ children }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const createTodo = async () => {
        const response = await axios.post(backendUrl + "/todos/create", {title, description})
        if(response.data.success){
            toast.success(response.data.message)
            fetchAllTodos()
            setTitle("")
            setDescription("")
            navigate("/")
        } else {
            toast.error(response.data.message);
        }
    }
    const fetchAllTodos = async () => {
        const response = await axios.get(backendUrl + "/todos/all")
        if (response.data.success) {
          setTodos(response.data.data);
        } else {
          toast.error(response.data.message);
        }
    }
    const fetchSingleTodo = async (id) => {
      const response = await axios.get(`${backendUrl}/todos/single/${id}`);

      if (response.data.success) {
        setTitle(response.data.data.title);
        setDescription(response.data.data.description);
      } else {
        toast.error(response.data.message);
      }
    };

    const updateTodo = async (id) => {
        const response = await axios.put(
          `${backendUrl}/todos/update/${id}`,
          { title, description },
        );
        if (response.data.success) {
          toast.success(response.data.message);
          fetchAllTodos()
          navigate("/")
        } else {
          toast.error(response.data.message);
        }
    }
    const deleteTodos = async (id) => {
        const response = await axios.delete(`${backendUrl}/todos/delete/${id}`)
        if (response.data.success) {
          toast.success(response.data.message);
          fetchAllTodos();
        } else {
          toast.error(response.data.message);
        }
    }

    useEffect(()=> {
        fetchAllTodos()
    },[])

    const value = {
        todos, setTodos,
        title, setTitle,
        description, setDescription,
        createTodo,
        fetchAllTodos,
        fetchSingleTodo,
        updateTodo,
        deleteTodos,
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext