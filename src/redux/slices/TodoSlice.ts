import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
        todos:[{
        id: "0",
        task: "",
        complete: false
    }]
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                task: action.payload.task,
                complete: false
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export const {addTodo, removeTodo} =  todoSlice.actions;

export default todoSlice.reducer;