import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "./components/todoSlice";


const ToDo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div style={{marginLeft:'400px',marginTop:'50px'}} className="todo-item shadow w-50 d-flex justify-content-evenly align-items-center">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button  className="bg-warning text-white rounded" onClick={handleToggleComplete}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button className="bg-danger rounded text-white"  onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ToDo;
