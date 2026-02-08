import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TodoContext from "../context/TodoContext";

const TodoCard = ({ todo }) => {

  const navigate = useNavigate()
  const { fetchSingleTodo, deleteTodos } = useContext(TodoContext)

  return (
    <div className="border-1 rounded-xl p-5">
      <h1 className="text-center w-full text-2xl">{todo.title}</h1>
      <p className="text-sm text-center sm:text-start mt-3">
        {todo.description}
      </p>
      <div className="flex justify-center items-center mt-3 space-x-3">
        <button
          onClick={() => {
            fetchSingleTodo(todo.id);
            navigate(`/update/${todo.id}`);
          }}
          className="border hover:border-blue-700 text-black bg-gray-300 hover:bg-blue-700 hover:text-white px-4 py-0.5 shadow-none hover:shadow-[0_0_20px_rgb(51,51,255)] transition-all duration-200 rounded-full cursor-pointer"
        >
          Update
        </button>

        <button
          onClick={() => deleteTodos(todo.id)}
          className="border hover:border-red-700 text-black bg-gray-300 hover:bg-red-700 hover:text-white px-4 py-0.5 shadow-none hover:shadow-[0_0_20px_rgb(255,51,51)] transition-all duration-200 rounded-full cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard
