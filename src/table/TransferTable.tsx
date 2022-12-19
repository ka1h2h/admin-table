import { useAppSelector } from "../redux/hooks";

export default function TranferTable() {
  const reserveTable = useAppSelector((s) => s.table.tableContent.transfer);

  return (
    <table className="table">
      <thead>
        {reserveTable.fields.map((item) => {
          return (
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.order}</th>
              <th>{item.place}</th>
              <th>{item.date}</th>
            </tr>
          );
        })}
      </thead>
      <tbody>
        {reserveTable.content.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.order}</td>
              <td>{item.place}</td>
              <td>{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
