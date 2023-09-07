import {act, fireEvent, render, screen} from "@testing-library/react";

import {Provider} from "react-redux";
import {store} from "@/store";

import TodoHeader from "@/components/todo-header.tsx";

describe('Todo Header', () => {
  const customRender = () => {
    render(
      <Provider store={store}>
        <TodoHeader />
      </Provider>
    );
    const form = screen.getByTestId("todo-form") as HTMLFormElement;
    const input = screen.getByTestId("todo-input") as HTMLInputElement;

    return {form, input};
  }
  const submitForm = async (form: HTMLFormElement, input: HTMLInputElement, value: string) => {
    await act(() => {
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value }});
      fireEvent.submit(form);
    });
  }

  test("Title less than 5 symbols doesn't hit store",  async () => {
    const {form, input} = customRender();

    const todoTitle = "todo";

    const initialStoreLength = store.getState().todos.todos.length;
    await submitForm(form, input, todoTitle);
    const endStoreLength = store.getState().todos.todos.length;

    expect(endStoreLength).toBe(initialStoreLength);
  });

  test("Title exact 5 symbols hits store",  async () => {
    const {form, input} = customRender();

    const todoTitle = "Right";

    const initialStoreLength = store.getState().todos.todos.length;
    await submitForm(form, input, todoTitle);
    const endStoreLength = store.getState().todos.todos.length;

    expect(endStoreLength).toBe(initialStoreLength + 1);
  });

  test("Title more than 5 symbols hits store",  async () => {
    const {form, input} = customRender();
    const todoTitle = "Writing code";

    const initialStoreLength = store.getState().todos.todos.length;
    await submitForm(form, input, todoTitle);
    const endStoreLength = store.getState().todos.todos.length;

    expect(endStoreLength).toBe(initialStoreLength + 1);
  });
});