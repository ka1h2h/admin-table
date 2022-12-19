import React from "react";
import { useAppSelector } from "../redux/hooks";
import Table from "./table-ui/Table";

export default function GuestsTable() {
  const guestsData = useAppSelector((s) => s.guests.guests);
  return <Table data={guestsData} />;
}
