import { useState } from "react";
import { getTodos, updateTodos, removeTodos } from "../redux/slices/TodoSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";

const TodoItem = () => {
  const dispatch = useAppDispatch();
  const {todos, loading, error} = useAppSelector(state=> state.todos);
    
  return (
    <div className="w-3/4 mx-auto flex justify-center border-black">
      <button onClick={()=>dispatch(getTodos())}>Fetch Todos</button>
      <ul className="w-full flex flex-col gap-1">
        {todos.map(todo => (
          <li
            className="border-2 border-slate-500 text-slate-700 rounded-md text-left p-1">
              {todo.title}

          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItem