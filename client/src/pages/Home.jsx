import { useContext } from "react"
import TodoCard from "../components/TodoCard"
import TodoContext from "../context/TodoContext"

const Home = () => {

    const { todos } = useContext(TodoContext)


  return (
    <div className="min-h-[80vh] min-w-screen flex justify-center py-5">
      <div className="w-full h-[35rem] md:w-[70rem] md:h-[40rem] mx-3 rounded-xl overflow-y-auto bg-[#002455] text-gray-300">
        <h2 className="text-center text-3xl font-semibold text-white mt-5 sticky top-0 py-2 backdrop-blur-md">
          Lists
        </h2>

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home
