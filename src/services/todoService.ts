import api from "./api";

import { Todo, CreateTodo, UpdateTodo } from "../types/todoType";

export const postTodo = async (data: CreateTodo): Promise<Todo> =>{
    const res = await api.post("/todos", data);
    return res.data;
}

export const getTodo = async (): Promise<Todo[]> =>{
    const res = await api.get("/todos");
    return res.data;
}

export const putTodo = async (id: number, data: UpdateTodo): Promise<Todo> =>{
    const res = await api.put(`/todos/${id}`, data);
    return res.data;
}

export const deleteTodo = async (id: number): Promise<void>=>{
    await api.delete(`/todos/${id}`);
}