import { createSlice } from "@reduxjs/toolkit";
import reserveData from "./../data/reserve-data.json";

export class Reserve {
  public id: number;
  public name: string;
  public date: string;
  public phone: string;

  static load() {
    return reserveData.content.map((item) => {
      const reserve = new Reserve();
      reserve.id = item.id;
      reserve.name = item.name;
      reserve.date = item.date;
      reserve.phone = item.phone;
      return reserve;
    });
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
      new Columns("Дата"),
      new Columns("Телефон"),
    ];
    return columnsData;
  }
}

export const ReserveSlice = createSlice({
  name: "reserve",
  initialState: {
    reserve: Reserve.load(),
    columns: Columns.load(),
  },
  reducers: {},
});
