import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import Table from "./table-ui/Table";

export default function ReserveTable() {
  const reserveData = useAppSelector((s) => s.reserve.reserve);
  return <Table data={reserveData} />;
}
