import React from "react";
import { useAppSelector } from "../redux/hooks";

export default function Tbody() {
  const tableContent = useAppSelector((c) => c.table.tableContent);
  return (
    <tbody>
      {Object.values(tableContent).map((td: any, index: number) => {
        return (
          <tr>
            {Object.keys(td).map((item: any) => {
              return <td>{td[item]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
