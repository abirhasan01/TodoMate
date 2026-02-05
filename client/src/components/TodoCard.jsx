import { useNavigate } from "react-router-dom";

const TodoCard = ({ todo }) => {

  const navigate = useNavigate()

  return (
    <div className="border-1 rounded-xl p-5">
      <h1 className="text-center w-full text-2xl">{todo.title}</h1>
      <p className="text-sm text-center sm:text-start mt-3">
        {todo.description}
      </p>
      <div className="flex justify-center items-center mt-3 space-x-3">
        <button onClick={()=> navigate("/update")} className="border hover:border-blue-600 px-4 py-0.5 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">
          Update
        </button>
        <button
          className="border hover:border-red-600 px-4 py-0.5 rounded-full cursor-pointer hover:bg-red-600 hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard
