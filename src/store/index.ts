import {configureStore} from "@reduxjs/toolkit";

import todoReducer from "./todoSlice";

import {todosListenerMiddleware} from "@/store/middleware";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosListenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;