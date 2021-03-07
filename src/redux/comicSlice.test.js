import store from "./store";
import reducer, { fetchComic } from "./comicSlice";

describe("reducers", () => {
  const initalState = store.getState().comic;

  it("sets loading to true whilst the comic is being fetched", () => {
    const expectedState = {
      loading: true,
      error: null,
      data: [],
    };

    const action = { type: fetchComic.pending.type };
    const state = reducer(initalState, action);
    expect(state).toEqual(expectedState);
  });

  it("sets data as the response", () => {
    const payload = {
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

    const expectedState = {
      loading: false,
      error: null,
      data: payload,
    };

    const action = {
      type: fetchComic.fulfilled.type,
      payload,
    };

    const state = reducer(initalState, action);
    expect(state).toEqual(expectedState);
  });

  it("sets error to the responses error", () => {
    const error = { message: "There was an error" };

    const expectedState = {
      loading: false,
      error: error.message,
      data: [],
    };

    const action = { type: fetchComic.rejected.type, error };
    const state = reducer(initalState, action);
    expect(state).toEqual(expectedState);
  });
});
