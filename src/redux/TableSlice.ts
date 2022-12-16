import { DataBase } from "./DataSlice";
import { createSlice } from "@reduxjs/toolkit";

interface IFinalObject {
  table: string;
  link: string;
  fields: {};
  content: [];
}

export class TableObserver {
  static currentField: string;
  static fields: any = DataBase.data;
  static finalObject: IFinalObject;
  static observer(field: string) {
    try {
      return (
        ((TableObserver.currentField = field),
        (TableObserver.finalObject =
          TableObserver.fields[TableObserver.currentField])),
        (TableHeaderProvider.fields = TableObserver.finalObject.fields)
      );
    } catch (e) {
      console.log(e);
    }
    return TableObserver.finalObject;
  }
}
export class TableHeaderProvider {
  static fields: {};
}

export const TableSlice = createSlice({
  name: "user",
  initialState: {
    tableHeader: {},
    tableContent: {},
  },
  reducers: {
    tableObserver: (state, action) => {
      TableObserver.observer(action.payload);
      state.tableHeader = TableHeaderProvider.fields;
      state.tableContent = TableObserver.finalObject.content;
    },
  },
});

export const { tableObserver } = TableSlice.actions;
