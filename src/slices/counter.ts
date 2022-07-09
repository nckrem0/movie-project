import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0 as number,
  reducers: {
    increase: (state: number) => {
      return state + 1;
    },
    decrease: (state: number) => {
      return state - 1;
    },
    increaseByAmount: (state: number, { payload }: PayloadAction<number>) => {
      console.log(payload);

      return state + payload;
    },
  },
});

export const { increase, decrease, increaseByAmount } = counterSlice.actions;

export default counterSlice.reducer;
