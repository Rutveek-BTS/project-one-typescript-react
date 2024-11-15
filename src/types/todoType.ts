export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
}

export type CreateTodo = Omit<Todo, 'id'>;

export type UpdateTodo = Partial<Todo>