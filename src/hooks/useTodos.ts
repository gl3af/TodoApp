import {useEffect} from "react";
import {Todo} from "@/types";

import {useAppDispatch} from "@/store/hooks";
import {setTodos} from "@/store/todoSlice.ts";

import {useLocalStorage} from "@/hooks/useLocalStorage.ts";

export const useTodos = () => {
  const dispatch = useAppDispatch();
  const {getMany} = useLocalStorage<Todo>('todos');

  useEffect(() => {
    const localStorageTodos = getMany();
    dispatch(setTodos(localStorageTodos));
  }, [dispatch, getMany]);
}