import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";

import {store} from "@/store";
import App from "@/App";

describe('App', () => {
  test('renders heading', () => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>
    );
    const headline = screen.getByText(/todos/i);
    expect(headline).toBeInTheDocument();
  });
});