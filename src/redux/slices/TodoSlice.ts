import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateTodo, Todo, UpdateTodo } from "../../types/todoType";
import { postTodo, getTodo, putTodo, deleteTodo } from "../../services/todoService";

interface TodoState {
    todos: Todo[],
    loading: boolean,
    error: string | null;
}

const initialState: TodoState = {
        todos: [],
        loading: false,
        error: null
}

// Async Actions

export const addTodos = createAsyncThunk('todos/addTodos', async (data: CreateTodo)=>{
    return await postTodo(data);
})

export const getTodos = createAsyncThunk('todos/getTodos', async () =>{
    return await getTodo();
})

export const updateTodos = createAsyncThunk('todos/putTodos', async ({id, data}: {id: number, data: UpdateTodo})=>{
    return await putTodo(id, data);
})

export const removeTodos = createAsyncThunk('todos/removeTodos', async (id: number)=>{
    await deleteTodo(id);
    return id;
})

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        // Get Todos
        .addCase(getTodos.pending, (state)=> {
            state.loading = true;
            state.error = null;
        })
        .addCase(getTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
            state.loading = false;
            state.todos = action.payload;
        })
        .addCase(getTodos.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.error.message || "Failed To Fetch Todos";
        })
        // Add Todos
        .addCase(addTodos.fulfilled, (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        })
        // Edit Todo
        .addCase(updateTodos.fulfilled, (state, action: PayloadAction<Todo>) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
            state.todos[index] = action.payload;
            }
        })
        // Remove Todo
        .addCase(removeTodos.fulfilled, (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        });
    }
})

export default todoSlice.reducer;