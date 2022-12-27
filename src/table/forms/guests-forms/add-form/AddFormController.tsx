import { useState } from "react";
import { NavLink } from "react-router-dom";
import { addGuest } from "../../../../redux/guest/async";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import AddForm from "./AddForm";

export interface IGuestAdd {
  [name: string]: string;
}

export default function AddFormController() {
  const [value, setValue] = useState("");
  const formData = useAppSelector((f) => f.guests.forms);
  const dispatch = useAppDispatch();
  const newGuest: IGuestAdd = {} as IGuestAdd;

  const handler = (fieldName: string, fieldValue: string) => {
    newGuest[fieldName] = fieldValue;
  };

  const sender = () => {
    dispatch(addGuest(newGuest));
  };

  return (
    <>
      <AddForm
        form={formData}
        handler={handler}
        value={value}
        newGuest={newGuest}
      />

      <button className="btn btn-primary mx-5 mt-2" onClick={sender}>
        <NavLink className="text-white" to="/guests">
          Создать
        </NavLink>
      </button>
    </>
  );
}
