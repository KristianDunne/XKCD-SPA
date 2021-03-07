import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const component = (
  <Provider store={store}>
    <App></App>
  </Provider>
);

describe("App component", () => {
  it("should render along with it's child components", () => {
    render(component);
    const titleElement = screen.getByText(/XKCD SPA/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should handle the input field change", () => {
    render(component);
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "123" } });
    expect(input.value).toBe("123");
  });

  it("should handle the form submit", () => {
    render(component);
    const input = screen.getByTestId("input");
    const form = screen.getByTestId("form");
    const onSubmit = jest.fn();
    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.submit(form);
    waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    }).then();
  });
});
