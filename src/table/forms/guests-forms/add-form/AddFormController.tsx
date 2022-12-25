import { useState } from "react";
import { NavLink } from "react-router-dom";
import { addGuest } from "../../../../redux/GuestsSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import AddForm from "./AddForm";
import GuestsFormAdd from "./AddForm";

interface IGuest {
  [name: string]: string;
}

export default function AddFormController() {
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
      <AddForm
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
