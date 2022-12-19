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
export const ReserveSlice = createSlice({
  name: "reserve",
  initialState: {
    reserve: Reserve.load(),
  },
  reducers: {},
});
