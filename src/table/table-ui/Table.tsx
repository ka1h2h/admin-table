import { NavLink } from "react-router-dom";

import Tbody from "./Tbody";
import Thead from "./Thead";

type MTProps<T> = {
  columns: Array<{
    name: string;
  }>;
  data: any[];
};
export default function Table<T>(p: MTProps<T>) {
  return (
    <div className="content">
      <div className="content-table mt-5 px-5 ps-5">
        <NavLink to={"add"}>
          <button
            type="button"
            className="btn btn-primary d-flex ms-auto mx-2 "
          >
            Создать запись
          </button>
        </NavLink>
        <table className="table">
          <Thead columns={p.columns} />
          <Tbody data={p.data} />
        </table>
      </div>
    </div>
  );
}
