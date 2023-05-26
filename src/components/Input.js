import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log("adding input into list");
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: nanoid(),
      })
    );
  };
  return (
    <div className=" h-14 w-3/4 bg-white rounded-lg flex  justify-center items-center px-2">
      <input
        className="flex-1  px-2 mx-2 outline-none"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-300 rounded-lg px-2 hover:bg-blue-500 h-8 w-fit"
        onClick={addTodo}
      >
        Add!
      </button>
    </div>
  );
};

export default Input;
