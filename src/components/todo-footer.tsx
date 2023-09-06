import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {deleteCompleted, setFilter} from "@/store/todoSlice.ts";

import {filters} from "@/mocks.ts";
import {Filter} from "@/types.ts";
import {cn} from "@/lib/utils.ts";

const TodoFooter = () => {
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();
  const left = todos.filter(todo => !todo.completed).length;

  return (
    <div className="border-t p-4 flex items-center justify-between text-primary/70">
      <p data-testid="left-amount">{left} {left === 1 ? "item" : "items"} left</p>
      <Filters />
      <button
        data-testid="clear-completed"
        onClick={() => dispatch(deleteCompleted())}
      >Clear completed</button>
    </div>
  );
};

const Filters = () => {
  return (
    <ul className="flex items-center gap-4">
      {
        filters.map(filterItem => (
          <FilterItem key={filterItem.name} filterItem={filterItem} />
        ))
      }
    </ul>
  )
}

type Props = {
  filterItem: { name: string, filter: Filter };
}

const FilterItem = ({ filterItem }: Props) => {
  const currentFilter = useAppSelector(state => state.todos.filter);
  const dispatch = useAppDispatch();

  const {name, filter} = filterItem;
  const active = filter === currentFilter;

  const onClick = (filter: Filter) => {
    dispatch(setFilter(filter));
  }

  return (
    <li>
      <button
        data-testid={`filter-${name}`}
        className={cn("px-2 py-1 border border-transparent", active && "border-orange-500")}
        onClick={() => onClick(filter)}
      >
        {name}
      </button>
    </li>
  )
}

export default TodoFooter;