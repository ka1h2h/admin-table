const DataForUserLoader = require("./test");
const TableFieldsFormatter = require("./test");
import data from "./test.data.json";
import { DataForUser } from "./test";

// describe("PropertyEncryption", () => {
//   beforeAll(() => {
//     jest
//       .spyOn(TableFieldsFormatter, "fieldsLoader")
//       .mockImplementation(() => data);
//   });
// });
const expected2 = {
  id: "#",
  name: "Имя",
  phone: "Телефон",
  email: "Почта",
  city: "Город",
};

const expected3 = [
  {
    id: "1",
    name: "Иван Иванов",
    phone: "+7918-223-60-66",
    email: "ivanov@mail.ru",
    city: "Краснодар",
  },
  {
    id: "2",
    name: "Иван Иванов",
    phone: "+7918-223-60-66",
    email: "ivanov@mail.ru",
    city: "Краснодар",
  },
];

it("decrypts object values", () => {
  const decrypted = TableFieldsFormatter.fieldsLoader;
  expect(decrypted).toEqual(TableFieldsFormatter.fields);
  expect(TableFieldsFormatter.fields).toEqual(expected2);
});
