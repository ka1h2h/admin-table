import { useAppSelector } from "../redux/hooks";

export default function GuestsTable() {
  const guestsTable = useAppSelector((s) => s.table.tableContent.guests);
  return (
    <table className="table">
      <thead>
        {guestsTable.fields.map((item) => {
          return (
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.phone}</th>
              <th>{item.email}</th>
              <th>{item.city}</th>
            </tr>
          );
        })}
      </thead>
      <tbody>
        {guestsTable.content.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
