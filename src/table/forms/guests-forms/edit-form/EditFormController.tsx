import { useState } from "react";
import { NavLink } from "react-router-dom";
import { addGuest } from "../../../../redux/GuestsSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import EditForm from "./EditForm";

interface IGuest {
  [name: string]: string;
}

export default function EditFormController() {
  const [value, setValue] = useState("");
  const formData = useAppSelector((f) => f.guests.forms);
  const dispatch = useAppDispatch();
  const newGuest: IGuest = {} as IGuest;

  const handler = (fieldName: string, fieldValue: string) => {
    newGuest[fieldName] = fieldValue;
  };

  const sender = () => dispatch(addGuest(newGuest));

  return (
    <>
      <EditForm
        form={formData}
        handler={handler}
        value={value}
        fetch={newGuest}
      />
      <button className="btn btn-primary mx-5 mt-2" onClick={sender}>
        <NavLink to="/guests">Сохранить</NavLink>
      </button>
    </>
  );
}
