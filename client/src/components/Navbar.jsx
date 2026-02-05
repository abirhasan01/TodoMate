import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-between items-center px-5 sm:px-10 md:px-15 lg:px-20 py-5">
        <Link to="/">
          <img className="h-10 md:h-15 cursor-pointer" src="./logo.png" alt="" />
        </Link>
        <div>
          <button
            onClick={() => navigate("/add")}
            className="border px-4 py-1 rounded-full cursor-pointer text-gray-600"
          >
            Add Todo
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar
