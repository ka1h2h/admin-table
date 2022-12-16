import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

export class DataBase {
  static data = data;
}

export const DataSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    tableObserver: (state, action) => {},
  },
});

export const { tableObserver } = DataSlice.actions;
