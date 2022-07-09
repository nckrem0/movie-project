import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import counter from "slices/counter";
import movies from "slices/movies";
// configureStore : mặc định đã được setup redux-devtool và redux thunk
const store = configureStore({
  reducer: {
    counter,
    movies,
  },
  //devtools: false // có enable devtool hay không, mặc định là true
  //   devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
