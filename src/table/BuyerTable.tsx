import { useAppSelector } from "../redux/hooks";

export default function BuyerTable() {
  const reserveTable = useAppSelector((s) => s.table.tableContent.buyer);

  return (
    <table className="table">
      <thead>
        {reserveTable.fields.map((item) => {
          return (
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.order}</th>
              <th>{item.list}</th>
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
              <td>{item.list}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
