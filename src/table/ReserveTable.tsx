import { useAppSelector } from "../redux/hooks";

export default function ReserveTable() {
  const reserveTable = useAppSelector((s) => s.table.tableContent.reserve);

  return (
    <table className="table">
      <thead>
        {reserveTable.fields.map((item) => {
          return (
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.date}</th>
              <th>{item.phone}</th>
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
              <td>{item.date}</td>
              <td>{item.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
