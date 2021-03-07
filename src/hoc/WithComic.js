import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComic } from "../redux/comicSlice";
import { getLoading, getData, getError } from "../redux/comicSlice";

const WithComic = (WrappedComponent) => {
  return function Component({ url, ...props }) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchComic(url));
    }, [dispatch, url]);

    const loading = useSelector(getLoading);
    const data = useSelector(getData);
    const error = useSelector(getError);

    if (error) {
      return (
        <div>
          <h2>Ooops, looks like this comic doesn't exist!</h2>
        </div>
      );
    } else if (loading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    } else if (data) {
      return (
        <div>
          <WrappedComponent {...props} comic={data}></WrappedComponent>
        </div>
      );
    }
  };
};

export default WithComic;
