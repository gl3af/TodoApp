import {render, screen} from "@testing-library/react";

import {Provider} from "react-redux";
import {store} from "@/store";
import TodoHeader from "@/components/todo-header.tsx";

describe('Todo Footer', () => {
  // Wrong input test
  test('Label renders right data',  () => {
    render(
      <Provider store={store}>
        <TodoHeader />
      </Provider>
    );
    const todos = store.getState().todos.todos;
    const leftAmount = todos.filter(todo => !todo.completed).length;

    const text = screen.getByTestId("left-amount");
    expect(text.textContent![0]).toBe(`${leftAmount}`);
  });

});