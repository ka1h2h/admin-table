// import { GuestsForm, IGuest } from "../../../../redux/guest/classes";

// type MTProps<T> = {
//   form: GuestsForm[];
//   handler(fieldName: string, fieldValue: string): void;
//   newGuest: any;
// };

// export default function AddForm<T>(p: MTProps<T>) {
//   return (
//     <form className="needs-validation">
//       <div className="form-row">
//         <div className="col-md-4 mb-3 w-25 mx-5 mt-5">
//           {p.form.map((item: GuestsForm, index: number) => {
//             return (
//               <>
//                 <label htmlFor="validationCustom01" className="mb-2">
//                   {item.label}
//                 </label>
//                 <input
//                   key={index}
//                   type="text"
//                   name={item.field}
//                   className="form-control mb-3"
//                   id="validationCustom01"
//                   placeholder={item.placeholder}
//                   onChange={(e) => p.handler(item.field, e.target.value)}
//                   value={p.newGuest[item.field]}
//                   required
//                 />
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </form>
//   );
// }
