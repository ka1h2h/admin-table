import { useAppDispatch } from "./redux/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import ReserveTable from "./table/ReserveTable";
import GuestsTable from "./table/GuestsTable";
import RestTable from "./table/RestTable";
import BuyerTable from "./table/BuyerTable";
import TranferTable from "./table/TransferTable";
import CleaningTable from "./table/CleaningTable";

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
            <Route path="restaurant" element={<RestTable />} />
            <Route path="buyer" element={<BuyerTable />} />
            <Route path="transfer" element={<TranferTable />} />
            <Route path="cleaning" element={<CleaningTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
