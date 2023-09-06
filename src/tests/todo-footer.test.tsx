import {fireEvent, render, screen} from "@testing-library/react";

import {Provider} from "react-redux";
import {store} from "@/store";

import TodoFooter from "@/components/todo-footer";

import {filters} from "@/mocks.ts";

describe('Todo Footer', () => {
  // Label test
  test('Label renders right data', () => {
    render(
      <Provider store={store}>
        <TodoFooter />
      </Provider>
    );
    const todos = store.getState().todos.todos;
    const leftAmount = todos.filter(todo => !todo.completed).length;

    const text = screen.getByTestId("left-amount");
    expect(text.textContent![0]).toBe(`${leftAmount}`);
  });

  // Filters test
  filters.forEach(filterItem => {
    const name = filterItem.name;
    test(`Click on ${name} changes store filter`, () => {
      render(
        <Provider store={store}>
          <TodoFooter />
        </Provider>
      );
      const element = screen.getByTestId(`filter-${name}`);
      fireEvent.click(element);

      const filter = store.getState().todos.filter;
      expect(filter).toBe(`${filterItem.filter}`);
    });
  })

  // Clear test
  test("Click on clear acts right", () => {
    render(
      <Provider store={store}>
        <TodoFooter />
      </Provider>
    );

    const initialTodos = store.getState().todos.todos;
    const leftAmount = initialTodos.filter(todo => !todo.completed).length;

    const element = screen.getByTestId("clear-completed");

    fireEvent.click(element);
    const endTodos = store.getState().todos.todos;

    expect(endTodos.length).toBe(leftAmount);
  });

});