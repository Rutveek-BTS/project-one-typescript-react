import { useAppDispatch } from "../hooks/reduxHook";
import { FormEvent, useState } from "react";
import { addTodos } from "../redux/slices/TodoSlice";

const TodoForm = () => {
  const [task, setTask] = useState("")
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodos({title:task, completed: false}));
    setTask("")
  }

  return (
    <div className="w-2/3 mx-auto">
      <form method="post" onSubmit={ handleSubmit } className="flex justify-around">
        <input
          type="text"
          className="border-2 border-slate-500 rounded-md p-2 w-10/12"
          placeholder="Today's Task is..."
          name="task"
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-1/12 rounded-md text-2xl font-extrabold"
        >+</button>
      </form>
    </div>
  )
}

export default TodoForm