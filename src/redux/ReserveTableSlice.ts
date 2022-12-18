import { DataBase } from "./DataSlice";
import { createSlice } from "@reduxjs/toolkit";

type TReserve = {
  id: number;
  name: string;
  date: string;
  phone: string;
};

const db = {
  // объект, который умеет ходить в базу для определенного поля
  query: () => {
    return DataBase.data.reserve.content; //метод, который ходит в базу данных
  },
};

export class ReserveTableFieldsGenerator {
  // класс с очень длинным названием
  public id: number;
  public name: string;
  public date: string;
  public phone: string;

  static async fieldsFinder() {
    // метод, который формирует массив объектов на основании метода db, который сходил в базу и принес то, что от него нужно
    const d = await db.query();
    return d.map((item) => {
      const reserve = new ReserveTableFieldsGenerator();
      reserve.id = item.id;
      reserve.name = item.name;
      reserve.date = item.date;
      reserve.phone = item.phone;
      return reserve;
    });
  }
}

async function ReserveDataFinder() {
  // функция, которая возвращает этот массив объектов
  const finder = await ReserveTableFieldsGenerator.fieldsFinder();
  return;
}

ReserveDataFinder();
export const ReserveTableSlice = createSlice({
  name: "user",
  initialState: {
    tableHeader: {},
    tableContent: {},
  },
  reducers: {
    tableObserver: (state, action) => {},
  },
});

export const { tableObserver } = ReserveTableSlice.actions;
