import { useAppDispatch } from "./redux/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Header";
import SidebarController from "./sidebar/SidebarController";
import TableController from "./table/TableController";
import { useState } from "react";

export const App = (): any => {
  const [state, setState] = useState();

  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <SidebarController setState={setState} />
        {/* <Sidebar /> */}
        <div className="main-content">
          <Header />
          <TableController state={state} />
        </div>
      </div>
    </div>
  );
};
