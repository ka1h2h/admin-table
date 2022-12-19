import { useAppSelector } from "../redux/hooks";

export default function RestTable() {
  const reserveTable = useAppSelector((s) => s.table.tableContent.restaurant);

  return (
    <table className="table">
      <thead>
        {reserveTable.fields.map((item) => {
          return (
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.room}</th>
              <th>{item.order}</th>
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
              <td>{item.order}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
