import { useState } from "react";

const Add = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className="h-[80vh] w-screen flex justify-center items-center ">
      <form className="border rounded-2xl p-5 flex flex-col w-[40rem] mx-5">
        <h1 className="text-center text-2xl font-bold text-gray-500">
          ADD TODO
        </h1>

        <p className="my-1 mt-3 text-gray-500">Title:</p>
        <input
          className="w-full border rounded-xl outline-none pl-3 py-2"
          type="text"
          name=""
          id=""
          placeholder="Enter your title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="my-1 mt-3 text-gray-500">Description:</p>
        <textarea
          rows={4}
          className="resize-none border rounded-xl outline-none w-full pl-3 py-2"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>

        <div className="flex justify-center">
          <button className="mt-5 border px-10 py-2 rounded-lg text-gray-700 cursor-pointer">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add
