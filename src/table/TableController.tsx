import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import AddFormController from "./forms/guests-forms/add-form/AddFormController";
import EditFormController from "./forms/guests-forms/edit-form/EditFormController";
// import ReserveForm from "../forms/ReserveForm";
import GuestsTable from "./GuestsTable";
// import ReserveTable from "./ReserveTable";

type MTProps = {
  state: string;
};

export default function TableController<T>(p: MTProps) {
  console.log(p.state);
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
