import {createListenerMiddleware, isAnyOf} from '@reduxjs/toolkit';
import {RootState} from "@/store";

import {addTodo, updateTodo, deleteCompleted} from "./todoSlice.ts";

export const todosListenerMiddleware = createListenerMiddleware();

todosListenerMiddleware.startListening({
  matcher: isAnyOf(addTodo, updateTodo, deleteCompleted),
  effect: (_action, listenerApi) =>
    localStorage.setItem("todos", JSON.stringify((listenerApi.getState() as RootState).todos.todos))
});
