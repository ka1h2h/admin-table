import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGuests } from "../redux/GuestsSlice";
import { useAppSelector } from "../redux/hooks";
import Table from "./table-ui/Table";

type MTProps = {
  link: string;
};

export default function GuestsTable<T>(p: MTProps) {
  const guestsData = useAppSelector((s) => s.guests.guests);
  const guestsTableColumns = useAppSelector((c) => c.guests.columns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuests());
  }, []);
  return <Table columns={guestsTableColumns} data={guestsData} />;
}
