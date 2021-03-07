import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

describe("App component", () => {
  it("should render along with it's child components", () => {
    render(
      <Provider store={store}>
        <App></App>
      </Provider>
    );
    const titleElement = screen.getByText(/XKCD SPA/i);
    expect(titleElement).toBeInTheDocument();
  });
});
