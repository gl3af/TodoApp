import {Todo} from "@/types.ts";
import {cn} from "@/lib/utils.ts";

import {useAppDispatch} from "@/store/hooks.ts";
import {updateTodo} from "@/store/todoSlice.ts";

import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Label} from "@/components/ui/label.tsx";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul data-testid="todo-list">
      {
        todos.map(todo => ( <TodoItem key={todo.id} todo={todo}/> ))
      }
    </ul>
  );
};

const TodoItem = ({ todo }: { todo: Todo }) => {
  const dispatch = useAppDispatch();

  const onCheck = () => {
    dispatch(updateTodo(todo));
  }

  return (
    <li className="px-4 py-4 flex items-center justify-start gap-6 border-t">
      <Checkbox
        id={todo.id}
        checked={todo.completed}
        onCheckedChange={onCheck}
        className="h-8 w-8 rounded-full border-text-primary/40"
      />
      <Label
        htmlFor={todo.id}
        className={cn("text-2xl font-normal cursor-pointer", todo.completed && "text-primary/40 line-through")}
      >
        {todo.title}
      </Label>
    </li>
  )
}

export default TodoList;