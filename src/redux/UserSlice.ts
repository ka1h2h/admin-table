import { createSlice } from "@reduxjs/toolkit";
import data from "./../data.json";

export class UserData {
  constructor(public fields: {}, public guests: {}, public table: string) {}
}

export class DataForUserLoader {
  static load(data: UserData) {
    return data;
  }
}

export class DataForUserFormatter {
  constructor() {}

  static formatter() {
    const unformattedData = DataForUserLoader.load(data);
    TableFieldsFormatter.fieldsProvider(unformattedData.fields);
    TableFieldsFormatter.contentProvider(unformattedData.guests);
  }
}

export class TableFieldsFormatter {
  static fields: {} = {};
  static content: {} = {};
  constructor() {}

  static fieldsProvider(fieldsRows: {}) {
    TableFieldsFormatter.fields = fieldsRows;
  }

  static fieldsLoader() {
    return TableFieldsFormatter.fields;
  }

  static contentProvider(contentRows: {}) {
    TableFieldsFormatter.content = contentRows;
  }

  static contentLoader() {
    return TableFieldsFormatter.content;
  }
}

DataForUserFormatter.formatter();

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    rows: TableFieldsFormatter.fieldsLoader(),
    content: TableFieldsFormatter.contentLoader(),
  },
  reducers: {
    setUser: (state, action) => {},
  },
});

export const { setUser } = UserSlice.actions;
