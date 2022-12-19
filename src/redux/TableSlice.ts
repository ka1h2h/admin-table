import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

class GuestsColumn {
  public id: number;
  public name: string;
  public phone: string;
  public email: string;
  public city: string;

  static guestsFields() {
    const d = data.guests;
    return d.content.map((item) => {
      const newobj = new GuestsColumn();
      newobj.id = item.id;
      newobj.name = item.name;
      newobj.phone = item.phone;
      newobj.email = item.email;
      newobj.city = item.city;
      return newobj;
    });
  }
}

class ReserveColumn {
  public id: number;
  public name: string;
  public date: string;
  public phone: string;

  static reserveFields() {
    const d = data.reserve;
    return d.content.map((item) => {
      const newobj = new ReserveColumn();
      newobj.id = item.id;
      newobj.name = item.name;
      newobj.date = item.date;
      newobj.phone = item.phone;
      return newobj;
    });
  }
}

class DataController {
  static field(field: string) {
    switch (field) {
      case "reserve":
        return ReserveColumn.reserveFields();
      case "guests":
        return GuestsColumn.guestsFields();
      default:
        break;
    }
  }
}

export const TableSlice = createSlice({
  name: "user",
  initialState: {
    tableContent: data,
  },
  reducers: {
    tableObserver: (state, action) => {
      // state.tableContent = DataController.field(action.payload);
    },
  },
});

export const { tableObserver } = TableSlice.actions;
