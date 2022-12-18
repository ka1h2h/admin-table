import { useAppSelector } from "../redux/hooks";
import Tbody from "./tbody";
import Thead from "./Thead";

export const Table: React.FC = () => {
  const tableContent = useAppSelector((c) => c.table.tableContent);
  const data: any = [];
  const columns: any = [];
  console.log(tableContent);
  return (
    <div className="content">
      <div className="content-table mt-5">
        <table className="table">
          <Thead columns={columns} />
          <Tbody data={tableContent} />
        </table>
      </div>
    </div>
  );
};
