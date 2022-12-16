// import { DataForUserLoader } from "./redux/UserSlice";
import data from "./test.data.json";

export type Fields = {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
};

export class UserData {
  constructor(public fields: Fields, public guests: {}, public table: string) {}
}

export class DataForUser {
  static dataForUser: UserData = data;
}

export class TableFieldsFormatter {
  static fields: any;
  static content: {} = {};
  constructor() {}

  static fieldsLoader(): Fields {
    return (TableFieldsFormatter.fields = DataForUser.dataForUser.fields);
  }

  static contentLoader() {
    return (TableFieldsFormatter.content = DataForUser.dataForUser.guests);
  }
}

module.exports = TableFieldsFormatter;
module.exports = UserData;
