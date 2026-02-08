import { easeInOut, motion } from "motion/react";
import { useContext, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import TodoContext from "../context/TodoContext";


const Navbar = () => {
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false)
    const { setTitle, setDescription } = useContext(TodoContext)

  return (
    <div>
      <div className="flex justify-between items-center px-5 sm:px-10 md:px-15 lg:px-20 py-5">
        <Link to="/">
          <img
            className="h-10 md:h-15 cursor-pointer"
            src="./logo.png"
            alt=""
          />
        </Link>
        <div>
          <motion.button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => {
              setTitle("");
              setDescription("");
              navigate("/add");
            }}
            className="px-5 flex justify-center items-center py-1 rounded-full cursor-pointer text-gray-600"
            animate={{
              backgroundColor: isHover ? "rgb(0, 0, 0)" : "rgb(247, 242, 242)",
              color: isHover ? "rgb(255, 255, 255)" : "rgb(75, 85, 99)",
            }}
            transition={{
              duration: 0.3,
              ease: easeInOut,
            }}
          >
            <motion.span
              animate={{
                x: isHover ? 0 : 20,
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
              }}
            >
              Add Todo
            </motion.span>

            <motion.span
              animate={{
                x: isHover ? 0 : 24,
                rotate: isHover ? -90 : 90,
                opacity: isHover ? 1 : 0,
              }}
              transition={{
                x: { duration: 0.5 },
                rotate: { duration: 0.6 },
                opacity: { duration: 0.3 },
              }}
            >
              <IoIosAdd className="text-3xl" />
            </motion.span>
          </motion.button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar
