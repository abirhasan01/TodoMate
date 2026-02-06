import { easeInOut, motion } from "motion/react";
import { useContext, useState } from "react";
import { MdBookmarkAdded } from "react-icons/md";
import TodoContext from "../context/TodoContext";


const Add = () => {

  const { title, setTitle, description, setDescription, createTodo } =
    useContext(TodoContext);
      const [isHover, setIsHover] = useState(false)
    

  const handleSubmit = (e) => {
    e.preventDefault()
    createTodo()
  }

  return (
    <div className="h-[80vh] w-screen flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl p-5 flex flex-col w-[30rem] mx-5 bg-gradient-to-br from-[#C599B6] via-[#E6B2BA] via-[#fbad97] via-[#e4bba6] to-[#d1b5c7] space-y-5"
      >
        <h1 className="text-center text-2xl font-bold text-gray-600">
          ADD TODO
        </h1>

        <p className="my-1 mt-3 text-gray-500">Title:</p>
        <input
          className="w-full border border-gray-500 rounded-xl outline-none pl-3 py-2"
          type="text"
          name=""
          id=""
          placeholder="Enter your title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />

        <p className="my-1 mt-3 text-gray-500">Description:</p>
        <textarea
          rows={4}
          className="resize-none border border-gray-500 rounded-xl outline-none w-full pl-3 py-2"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        ></textarea>

        <div className="flex justify-center">
          <motion.button
            type="Submit"
            className="mt-5 px-10 py-2 flex justify-center items-center gap-2 rounded-lg text-gray-700 cursor-pointer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            animate={{
              backgroundColor: isHover ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)",
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
              }}
            >
              Add Todo
            </motion.span>

            <motion.span
              animate={{
                x: isHover ? 0 : 24,
                opacity: isHover ? 1 : 0,
              }}
              transition={{
                x: { duration: 0.3 },
                opacity: { duration: 0.2 },
                ease: easeInOut,
              }}
            >
              <MdBookmarkAdded />
            </motion.span>
          </motion.button>
        </div>
      </form>
    </div>
  );
}

export default Add
