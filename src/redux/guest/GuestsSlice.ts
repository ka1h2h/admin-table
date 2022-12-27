import { createSlice } from "@reduxjs/toolkit";
import { getGuests, getGuestById, addGuest } from "./async";
import { Guest, Columns, GuestsForm } from "./classes";

export const GuestSlice = createSlice({
  name: "fetch",
  initialState: {
    guests: [],
    guestById: {},
    columns: Columns.load(),
    forms: GuestsForm.load(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGuests.fulfilled, (state, action) => {
      state.guests = Guest.load(action.payload);
      state.guestById = {};
    });
    builder.addCase(getGuestById.fulfilled, (state, action) => {
      state.guestById = Guest.loadById(action.payload);
    });
    builder.addCase(addGuest.fulfilled, (state, action) => {
      state.guestById = {};
    });
  },
});
