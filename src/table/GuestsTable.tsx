import { useEffect } from "react";
import { getAllGuests } from "../redux/guest/async";

import { useAppDispatch } from "../redux/hooks";

import { useAppSelector } from "../redux/hooks";
import Table from "./table-ui/Table";

type MTProps = {
  link: string;
};

export default function GuestsTable<T>(p: MTProps) {
  const guestsData = useAppSelector((s) => s.guests.allGuests);
  const guestsTableColumns = useAppSelector((c) => c.guests.columns);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGuests());
  }, []);

  return <Table columns={guestsTableColumns} data={guestsData} />;
}
