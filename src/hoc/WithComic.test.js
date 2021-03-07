import { render, screen } from "@testing-library/react";
import WithComic from "./WithComic";
import { Provider } from "react-redux";
import store from "../redux/store";

const MockComponent = () => {
  return <div></div>;
};

const MockHOC = WithComic(MockComponent);

describe("Comic higher order component", () => {
  it("should render the component passed into it", () => {
    render(
      <Provider store={store}>
        <MockHOC></MockHOC>
      </Provider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
