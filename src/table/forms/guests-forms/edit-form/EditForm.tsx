import { GuestsForm } from "../../../../redux/guest/classes";

type MTProps<T> = {
  form: GuestsForm[];
  currentGuest: { [key: string]: string };
  eventsHandler(fieldName: string, fieldValue: string): void;
};

export default function EditForm<T>(p: MTProps<T>) {
  return (
    <form className="needs-validation">
      <div className="form-row">
        <div className="col-md-4 mb-3 w-25 mx-5 mt-5">
          {p.form.map((item: GuestsForm, index: number) => {
            return (
              <>
                <label htmlFor="validationCustom01" className="mb-2">
                  {item.label}
                </label>
                <input
                  key={index}
                  type="text"
                  name={item.field}
                  className="form-control mb-3"
                  id="validationCustom01"
                  placeholder={item.placeholder}
                  defaultValue={p.currentGuest[item.field]}
                  onChange={(e) => p.eventsHandler(item.field, e.target.value)}
                  required
                />
              </>
            );
          })}
        </div>
      </div>
    </form>
  );
}
