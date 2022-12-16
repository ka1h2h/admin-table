import { useAppSelector } from "../redux/hooks";

export default function Thead() {
  const tableHeader = useAppSelector((h) => h.table.tableHeader);
  return (
    <thead>
      <tr>
        {Object.values(tableHeader).map((item: any, index) => {
          return <th scope="col">{item}</th>;
        })}
      </tr>
    </thead>
  );
}
