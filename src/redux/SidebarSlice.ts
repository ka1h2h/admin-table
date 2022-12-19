import { createSlice } from "@reduxjs/toolkit";
import data from "./../data/menu-data.json";

export class SidebarItem {
  public table: string;
  public link: string;

  static load() {
    return data.map((item) => {
      const sidebarItem = new SidebarItem();
      sidebarItem.table = item.table;
      sidebarItem.link = item.link;
      return sidebarItem;
    });
  }
}

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sideBar: SidebarItem.load(),
  },
  reducers: {},
});
