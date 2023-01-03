// import { NavLink } from "react-router-dom";
// import { addGuest } from "../../../../redux/guest/async";
// import { IGuest } from "../../../../redux/guest/classes";

// import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
// import AddForm from "./AddForm";

// export default function AddFormController() {
//   const formData = useAppSelector((f) => f.guests.forms);
//   const dispatch = useAppDispatch();
//   const newGuest = {} as IGuest;

//   const handler = (fieldName: keyof IGuest, fieldValue: string) => {
//     newGuest[fieldName] = fieldValue;
//   };

//   const sender = () => {
//     dispatch(addGuest(newGuest));
//   };

//   return (
//     <>
//       <AddForm form={formData} handler={handler} newGuest={newGuest} />

//       <button className="btn btn-primary mx-5 mt-2" onClick={sender}>
//         <NavLink className="text-white" to="/guests">
//           Создать
//         </NavLink>
//       </button>
//     </>
//   );
// }
