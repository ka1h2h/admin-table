import { useAppSelector } from "../redux/hooks";

export default function CleaningTable() {
  const reserveTable = useAppSelector((s) => s.table.tableContent.cleaning);

  return (
    <table className="table">
      <thead>
        {reserveTable.fields.map((item) => {
          return (
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.room}</th>
              <th>{item.time}</th>
              <th>{item.comment}</th>
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
              <td>{item.room}</td>
              <td>{item.time}</td>
              <td>{item.comment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
