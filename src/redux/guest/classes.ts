interface IGuest {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  city: string;
}

export class Guest {
  static load(data: IGuest[]): IGuest[] {
    return data.map((item: IGuest) => {
      return {
        id: item.id,
        name: item.name,
        surname: item.surname,
        phone: item.phone,
        email: item.email,
        city: item.city,
      };
    });
  }

  static loadById(data: IGuest[]): IGuest {
    let guestById: IGuest;
    data.forEach((item: IGuest) => {
      guestById = {
        id: item.id,
        name: item.name,
        surname: item.surname,
        phone: item.phone,
        email: item.email,
        city: item.city,
      };
    });
    return guestById;
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
    const formsInputsData = [
      new GuestsForm("Имя", "Имя", "name"),
      new GuestsForm("Фамилия", "Фамилия", "surname"),
      new GuestsForm("Телефон", "Номер", "phone"),
      new GuestsForm("Email", "Email", "email"),
      new GuestsForm("Город", "Город", "city"),
    ];
    return formsInputsData;
  }
}
