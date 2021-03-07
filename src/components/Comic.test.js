import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Comic from "./Comic";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store;

let comicJson = {
  month: "3",
  num: 2433,
  link: "",
  year: "2021",
  news: "",
  safe_title: "Mars Rovers",
  transcript: "",
  alt:
    "I just Googled 'roomba sojourner mod' and was sorely disappointed. Be the change, I guess!",
  img: "https://imgs.xkcd.com/comics/mars_rovers.png",
  title: "Mars Rovers",
  day: "5",
};

describe("Latest Comic Test", () => {
  beforeEach(() => {
    store = mockStore({
      comic: {
        loading: false,
        error: false,
        data: comicJson,
      },
    });
  });

  it("Renders the latest comic", () => {
    render(
      <Provider store={store}>
        <Comic />
      </Provider>
    );
    const comicTitle = screen.getByText(comicJson.title);
    const comicImage = screen.getByAltText(comicJson.alt);
    expect(comicTitle).toBeInTheDocument();
    expect(comicImage).toBeInTheDocument();
  });
});
