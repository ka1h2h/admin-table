import { GuestListDTO, GuestsAPI } from "./classes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllGuests: any = createAsyncThunk(
  "fetch/getGuests",
  async function () {
    const response: GuestListDTO = await GuestsAPI.getGuestsList();
    return response;
  }
);

export const getCurrentGuestById = createAsyncThunk(
  "fetchById/getGuestById",
  async function (id: string) {
    try {
      const response = await axios.get(`http://localhost:3000/guests/${id}`);
      const data = await response.data.data;
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

export const addGuest = createAsyncThunk(
  "addFetch/addGuest",
  async function (body: {}) {
    try {
      await axios.post(`http://localhost:3000/guests/add`, body);
    } catch (e) {
      console.error(e);
    }
  }
);

export const editGuest = createAsyncThunk(
  "editFetch/editGuest",
  async function (body: any) {
    console.log(body);
    try {
      await axios.post(
        `http://localhost:3000/guests/edit/${body.id}`,
        body.currentGuestCopy
      );
    } catch (e) {
      console.error(e);
    }
  }
);
