import {useTodos} from "@/hooks/useTodos.ts";
import {useFilter} from "@/hooks/useFilter.ts";

import TodoHeader from "@/components/todo-header.tsx";
import TodoList from "@/components/todo-list.tsx";
import TodoFooter from "@/components/todo-footer.tsx";

const Todos = () => {
  useTodos();
  const filtered = useFilter();

  return (
    <section className="w-full md:w-3/5 flex flex-col justify-center">
      <div className="bg-white shadow-md">
        <TodoHeader />
        <TodoList todos={filtered} />
        <TodoFooter />
      </div>

    </section>
  );
};

export default Todos;