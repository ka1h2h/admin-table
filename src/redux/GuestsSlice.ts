import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface IGuest {
  id: number;
  name: string;
  phone: string;
  email: string;
  city: string;
}

export const getGuests: any = createAsyncThunk(
  "fetch/getGuests",
  async function () {
    try {
      const response = await axios.get(`http://localhost:3000/users`, {
        headers: { "Content-type": "application/json" },
      });
      const data = await response.data.data;
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

export const getGuestsById: any = createAsyncThunk(
  "fetchById/getGuestsById",
  async function (id) {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`, {
        headers: { "Content-type": "application/json" },
      });
      const data = await response.data.data;
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

export const addGuest: any = createAsyncThunk(
  "addFetch/addGuest",
  async function (body) {
    try {
      await axios.post(`http://localhost:3000/users/add`, {
        data: body,
      });
    } catch (e) {
      console.error(e);
    }
  }
);

export class Guest {
  public id: number;
  public name: string;
  public phone: string;
  public email: string;
  public city: string;

  static load(data: []) {
    return data.map((item: IGuest) => {
      const guest: Guest = new Guest();
      guest.id = item.id;
      guest.name = item.name;
      guest.phone = item.phone;
      guest.email = item.email;
      guest.city = item.city;
      return guest;
    });
  }

  static new(newGuest: Guest) {
    const guest = new Guest();
    guest.id = newGuest.id;
    guest.name = newGuest.name;
    guest.phone = newGuest.phone;
    guest.email = newGuest.email;
    guest.city = newGuest.city;
    return guest;
  }
}

export class Columns {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  static load() {
    const columnsData = [
      new Columns("#"),
      new Columns("Имя"),
      new Columns("Телефон"),
      new Columns("Email"),
      new Columns("Город"),
    ];
    return columnsData;
  }
}

export class GuestsForm {
  public label: string;
  public placeholder: string;
  public field: string;

  constructor(label: string, placeholder: string, field: string) {
    this.label = label;
    this.placeholder = placeholder;
    this.field = field;
  }

  static load() {
    const formsInputsData = [
      new GuestsForm("Имя", "Имя", "name"),
      new GuestsForm("Телефон", "Номер", "phone"),
      new GuestsForm("Email", "Email", "email"),
      new GuestsForm("Город", "Город", "city"),
    ];
    return formsInputsData;
  }
}

export const GuestSlice = createSlice({
  name: "fetch",
  initialState: {
    guests: [],
    columns: Columns.load(),
    forms: GuestsForm.load(),
  },
  reducers: {
    newGuest: (state, action) => {
      state.guests = [...state.guests, Guest.new(action.payload)];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGuests.fulfilled, (state, action) => {
      state.guests = Guest.load(action.payload);
    });
    builder.addCase(addGuest.fulfilled, (state, action) => {
      state.guests = [...state.guests, Guest.new(action.payload)];
    });
  },
});

export const { newGuest } = GuestSlice.actions;
