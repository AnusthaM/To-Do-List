import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TodoForm = ({ onAddTodo }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [input, setInput] = useState("");

  const handleFromVisibiility = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(input);
    setIsFormVisible(false);
    setInput("");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-fit">
      <form
        className={`${
          isFormVisible ? "block" : "hidden"
        } flex flex-col border px-5 py-5 rounded h-fit w-fit relative bottom-5 bg-white shadow-lg`}
        onSubmit={handleSubmit}
      >
        <div className="w-full flex justify-center mb-4">
          <h1 className="text-2xl font-bold">Add New Todo</h1>
        </div>

        <input
          type="text"
          placeholder="Enter todo title"
          className="border px-4 py-2 mr-4 w-full rounded "
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <div className="mt-4">
          <button
            className="border px-4 py-2 w-full rounded bg-purple-400 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <button
        className="border px-4 py-3 bg-green-500 text-white rounded mt-3
        relative bottom-5 left-96 cursor-pointer"
        onClick={handleFromVisibiility}
      >
        Add Todo <FaPlus className="inline-block ml-2" />
      </button>
    </div>
  );
};


export default TodoForm;