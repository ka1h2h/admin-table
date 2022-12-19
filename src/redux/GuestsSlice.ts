import { createSlice } from "@reduxjs/toolkit";
import guestsSlice from "./../data/guests-data.json";

export class Guest {
  public id: number;
  public name: string;
  public phone: string;
  public email: string;
  public city: string;

  static load() {
    return guestsSlice.content.map((item) => {
      const guest = new Guest();
      guest.id = item.id;
      guest.name = item.name;
      guest.phone = item.phone;
      guest.email = item.email;
      guest.city = item.city;
      return guest;
    });
  }
}

export const GuestSlice = createSlice({
  name: "guests",
  initialState: {
    guests: Guest.load(),
  },
  reducers: {},
});
