import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { editGuest, getGuestById } from "../../../../redux/guest/async";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import EditForm from "./EditForm";

export interface IGuestEdit {
  [name: string]: Object;
}

export default function EditFormController() {
  const formData = useAppSelector((f) => f.guests.forms);
  const guestById: IGuestEdit = useAppSelector((g) => g.guests.guestById);
  console.log(guestById);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGuestById(id));
  }, []);

  const handler = (fieldName: string, fieldValue: string): void => {
    guestById[fieldName] = fieldValue;
  };

  const sender = () => dispatch(editGuest({ id, guestById }));

  return (
    <>
      <EditForm form={formData} handler={handler} guestById={guestById} />
      <button className="btn btn-primary mx-5 mt-2" onClick={sender}>
        <NavLink className="text-white" to="/guests">
          Сохранить
        </NavLink>
      </button>
    </>
  );
}
