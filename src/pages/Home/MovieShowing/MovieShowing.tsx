import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, increaseByAmount } from "slices/counter";
import { getMovieList } from "slices/movies";
import { AppDispatch, RootState } from "store";

const MovieShowing = () => {
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.movies
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  if (isLoading) {
    // return <Loading />
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {data?.map((movie) => {
        return <p key={movie.maPhim}>{movie.tenPhim}</p>;
      })}
    </div>
  );
};

export default MovieShowing;
