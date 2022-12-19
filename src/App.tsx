import { useAppDispatch } from "./redux/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import ReserveTable from "./table/ReserveTable";
import GuestsTable from "./table/GuestsTable";

export const App = (): any => {
  const dispatch = useAppDispatch();

  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="guests" element={<GuestsTable />} />
            <Route path="reserve" element={<ReserveTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
