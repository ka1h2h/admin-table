import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllGuests, getCurrentGuestById, addGuest } from "./async";
import {
  Columns,
  GuestListDTO,
  GuestsDataValidator,
  GuestsForm,
} from "./classes";

export const GuestSlice = createSlice({
  name: "fetch",
  initialState: {
    allGuests: [],
    currentGuest: [],
    columns: Columns.load(),
    forms: GuestsForm.load(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllGuests.fulfilled,
      (s, action: PayloadAction<GuestListDTO>) => {
        s.allGuests = GuestsDataValidator.inspect(action.payload);
        console.log(s.allGuests);
        s.currentGuest = [];
      }
    );
    builder.addCase(getCurrentGuestById.fulfilled, (s, action) => {
      s.currentGuest = action.payload;
    });
    builder.addCase(addGuest.fulfilled, (s, action) => {
      s.currentGuest = [];
    });
  },
});
