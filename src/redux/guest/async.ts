import { IGuestEdit } from "./../../table/forms/guests-forms/edit-form/EditFormController";
import { IGuestAdd } from "./../../table/forms/guests-forms/add-form/AddFormController";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGuests: any = createAsyncThunk(
  "fetch/getGuests",
  async function () {
    try {
      const response = await axios.get(`http://localhost:3000/guests`, {
        headers: { "Content-type": "application/json" },
      });
      const data = await response.data.data;
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

export const getGuestById = createAsyncThunk(
  "fetchById/getGuestById",
  async function (id: string) {
    try {
      const response = await axios.get(`http://localhost:3000/guests/${id}`, {
        headers: { "Content-type": "application/json" },
      });
      const data = await response.data.data;
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

export const addGuest = createAsyncThunk(
  "addFetch/addGuest",
  async function (body: IGuestAdd) {
    try {
      await axios.post(`http://localhost:3000/guests/add`, body);
    } catch (e) {
      console.error(e);
    }
  }
);

export const editGuest = createAsyncThunk(
  "editFetch/editGuest",
  async function (body: IGuestEdit) {
    try {
      await axios.post(
        `http://localhost:3000/guests/edit/${body.id}`,
        body.guestById
      );
    } catch (e) {
      console.error(e);
    }
  }
);
