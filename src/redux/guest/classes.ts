import { arrayExpression } from "@babel/types";
import axios from "axios";
import { validateSync } from "class-validator";

import { MaxLength, MinLength, ArrayNotEmpty } from "class-validator";

interface IGuest {
  id: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  city: string;
}

export class GuestListDTO {
  @ArrayNotEmpty()
  @MinLength(1)
  @MaxLength(999, {
    each: true,
  })
  list: IGuest[];
}

export class Guest {
  id: string;

  @MinLength(2)
  @MaxLength(16)
  name: string;

  @MinLength(3)
  @MaxLength(16)
  surname: string;

  @MinLength(12)
  @MaxLength(12)
  phone: string;

  @MinLength(10)
  @MaxLength(20)
  email: string;

  @MinLength(2)
  @MaxLength(16)
  city: string;
}

export class GuestsDataValidator {
  static inspect(data: GuestListDTO) {
    return data.list.reduce((newarr, d: Guest): Guest[] => {
      const guest = new Guest();
      (guest.id = d.id),
        (guest.name = d.name),
        (guest.surname = d.surname),
        (guest.phone = d.phone),
        (guest.email = d.email),
        (guest.city = d.city);

      const validation = validateSync(guest);
      if (validation.length === 0) {
        newarr.push(guest);
      }
      return newarr;
    }, []);
  }
}

export class GuestsAPI {
  static async getGuestsList(): Promise<GuestListDTO> {
    try {
      const response = await axios.get(`http://localhost:3000/guests`);
      const data = await response.data;
      return data;
    } catch (e) {
      console.error(e);
    }
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
      new Columns("Фамилия"),
      new Columns("Телефон"),
      new Columns("Email"),
      new Columns("Город"),
    ];
    return columnsData;
  }
}

export class GuestsForm {
  public label: string;
  public placeholder: string;
  public field: string;

  constructor(label: string, placeholder: string, field: string) {
    this.label = label;
    this.placeholder = placeholder;
    this.field = field;
  }

  static load() {
    const formsInputsData: GuestsForm[] = [
      new GuestsForm("Имя", "Имя", "name"),
      new GuestsForm("Фамилия", "Фамилия", "surname"),
      new GuestsForm("Телефон", "Номер", "phone"),
      new GuestsForm("Email", "Email", "email"),
      new GuestsForm("Город", "Город", "city"),
    ];
    return formsInputsData;
  }
}
