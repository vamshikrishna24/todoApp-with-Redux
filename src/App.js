import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="bg-slate-400 w-screen h-screen flex items-center justify-center flex-col">
      <div
        className=" flex flex-col items-center bg-slate-300 rounded-xl my-2 py-8 overflow-y-auto  no-scrollbar"
        style={{ height: "700px", width: "500px" }}
      >
        <div className="flex-1 w-full flex flex-col items-center">
          {todoList.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Input />
    </div>
  );
}

export default App;
