export interface Todo {
  id?: number | string;
  completed?: boolean;
  title?: string;
}

export function createTodo(params: Partial<Todo>): Todo {
  return {
    ...params
  } as Todo;
}
