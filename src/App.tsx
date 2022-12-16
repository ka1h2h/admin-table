import { useAppDispatch } from "./redux/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Table } from "./table/Table";
import Sidebar from "./Sidebar";
import Header from "./Header";

export const App = (): any => {
  const dispatch = useAppDispatch();

  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Table />
        </div>
      </div>
    </div>
  );
};
