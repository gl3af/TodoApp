import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Filter, Todo} from "@/types.ts";
import { v4 as uuid } from 'uuid';

type TodosState = {
  todos: Todo[];
  filter: Filter;
}

const initialState: TodosState = {
  todos: [],
  filter: "",
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: uuid(),
        title: action.payload,
        completed: false,
      });
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      todo!.completed = !todo!.completed;
    },
    deleteCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed)
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  }
})

export const {setTodos, addTodo, updateTodo, deleteCompleted, setFilter} = todosSlice.actions;
export default todosSlice.reducer;