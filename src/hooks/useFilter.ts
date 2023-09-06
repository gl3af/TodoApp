import { useAppSelector } from "@/store/hooks.ts";
import {Todo} from "@/types.ts";

export const useFilter = () => {
  const {todos, filter} = useAppSelector(state => state.todos)
  let filtered: Todo[] = [];

  if (!filter) filtered = todos;

  if (filter === "active") {
    filtered = todos.filter(todo => !todo.completed)
  }

  if (filter === "completed") {
    filtered = todos.filter(todo => todo.completed)
  }

  return filtered;
}