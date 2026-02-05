import { useEffect, useState } from "react"
import { data } from "../assets/assets"
import TodoCard from "./TodoCard"

const Home = () => {

    const [todoData, setTodoData] = useState([])

    const todoList = async () => {
        setTodoData(data)
    }

    useEffect(()=> {
        todoList()
    },[])

  return (
    <div className="min-h-[80vh] min-w-screen flex justify-center py-5">
      <div className="w-full h-[35rem] md:w-[70rem] md:h-[40rem] mx-3 rounded-xl bg-white overflow-y-auto">

        <h2 className="text-center text-2xl mt-5 sticky top-0 py-2 bg-white">Lists</h2>

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {todoData.map((todo, index) => (
            <TodoCard key={index} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home
