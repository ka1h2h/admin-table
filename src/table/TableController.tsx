import { Route, Routes } from "react-router-dom";
import AddFormController from "./forms/guests-forms/add-form/AddFormController";
import EditFormController from "./forms/guests-forms/edit-form/EditFormController";
// import ReserveForm from "../forms/ReserveForm";
// import ReserveTable from "./ReserveTable";
import GuestsTable from "./GuestsTable";

type MTProps = {
  state: string;
};

export default function TableController<T>(p: MTProps) {
  return (
    <Routes>
      <Route path="guests" element={<GuestsTable link={p.state} />} />
      <Route path="guests/add" element={<AddFormController />} />
      <Route path="guests/edit/:id" element={<EditFormController />} />
      {/* <Route path="reserve" element={<ReserveTable link={p.state} />} />
      <Route path="reserve/add" element={<ReserveForm />} /> */}
    </Routes>
  );
}
