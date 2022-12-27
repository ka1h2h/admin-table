export interface IGuest {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  city: string;
}

export class Guest {
  public id: number;
  public name: string;
  public surname: string;
  public phone: string;
  public email: string;
  public city: string;

  static load(data: []) {
    return data.map((item: IGuest) => {
      const guest: Guest = new Guest();
      guest.id = item.id;
      guest.name = item.name;
      guest.surname = item.surname;
      guest.phone = item.phone;
      guest.email = item.email;
      guest.city = item.city;
      return guest;
    });
  }

  static loadById(data: any) {
    const guest: IGuest = new Guest();
    data.forEach((item: IGuest) => {
      (guest.id = item.id),
        (guest.name = item.name),
        (guest.surname = item.surname),
        (guest.phone = item.phone),
        (guest.email = item.email),
        (guest.city = item.city);
    });
    return guest;
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
