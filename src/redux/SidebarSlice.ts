import { createSlice } from "@reduxjs/toolkit";
import data from "./../data.json";
import { DataBase } from "./DataSlice";

interface ISidebar {
  link: string;
  table: string;
}

export class SidebarController {
  static items: {};
  static sidebarItemsLoader() {
    try {
      SidebarController.items = DataBase.data;
      return Object.values(SidebarController.items).map((item: ISidebar) => {
        return (SidebarController.items = item);
      });
    } catch (e) {
      console.log(e);
    }
    return SidebarController.items;
  }
}

export const SidebarSlice = createSlice({
  name: "user",
  initialState: {
    sideBar: {},
  },
  reducers: {},
});
