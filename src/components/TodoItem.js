import { Checkbox } from "@mui/material";
import React from "react";
import { setCheck } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ item }) => {
  const decoration = "line-through";
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setCheck(item.id));
  };
  return (
    <div className="flex flex-wrap items-center justify-start w-4/5 my-1 mx-1 h-fit rounded-xl bg-white">
      <Checkbox
        checked={item.done}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": " secondary checkbox " }}
      />
      <p className={("break-words", item.done && decoration)}>{item.item}</p>
    </div>
  );
};

export default TodoItem;
