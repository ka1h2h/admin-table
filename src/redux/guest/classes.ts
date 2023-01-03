import axios from "axios";

interface IGuest {
  id: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  city: string;
}

export interface GuestListDTO {
  list: IGuest[];
}

export class GuestsDataValidator {
  static inspect(data: GuestListDTO) {
    if (Array.isArray(data.list)) {
      return data.list.map((d: IGuest) => {
        const guest = {} as IGuest;
        (guest.id = d.id || ""),
          (guest.name = d.name || ""),
          (guest.surname = d.surname || ""),
          (guest.phone = d.phone || ""),
          (guest.email = d.email || ""),
          (guest.city = d.city || "");
        return guest;
      });
    } else {
      return [];
    }
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
