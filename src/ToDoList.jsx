import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ToDo from "./ToDo";
import { addTodo } from "./components/todoSlice";


const ToDoList = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText(""); // Clear the input field
    }
  };

  return (
   
      <div style={{height:"100vh",paddingTop:'100px'}} className="bg-success">
        <h1 className="pb-5 text-white">Todo App</h1>
        <div > 
          <input   
            type="text"  
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Add a new todo"
          />
          <button className="bg-primary rounded-5 text-white" onClick={handleAddTodo}>Add Todo</button>
        </div>
  
        <div>
          <h2 className="pt-2 text-white" >Your Todos</h2>
          {todos.length > 0 ? (
            todos.map((todo) => <ToDo key={todo.id} todo={todo} />)
          ) : (
            <h4 className="text-danger ">No todos found</h4>
          )}
        </div>
      </div>

  );
};

export default ToDoList;
