// import { useEffect } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { editGuest, getCurrentGuestById } from "../../../../redux/guest/async";
// import { IGuest } from "../../../../redux/guest/classes";

// import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
// import EditForm from "./EditForm";

// export default function EditFormController() {
//   const { id } = useParams();
//   const dispatch = useAppDispatch();

//   const formData = useAppSelector((f) => f.guests.forms);
//   const currentGuest = useAppSelector((g) => g.guests.currentGuest);
//   const currentGuestCopy = JSON.parse(JSON.stringify(currentGuest));

//   useEffect(() => {
//     dispatch(getCurrentGuestById(id));
//   }, []);

//   const eventsHandler = (fieldName: keyof IGuest, fieldValue: string) => {
//     currentGuestCopy[fieldName] = fieldValue;
//   };

//   const sender = (): void => {
//     dispatch(editGuest({ id, currentGuestCopy }));
//   };

//   return (
//     <>
//       <EditForm
//         form={formData}
//         eventsHandler={eventsHandler}
//         currentGuest={currentGuestCopy}
//       />
//       <button className="btn btn-primary mx-5 mt-2" onClick={sender}>
//         <NavLink className="text-white" to="/guests">
//           Сохранить
//         </NavLink>
//       </button>
//     </>
//   );
// }
