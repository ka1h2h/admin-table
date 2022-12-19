import { useAppSelector } from "../redux/hooks";
import GuestsTable from "./GuestsTable";
import ReserveTable from "./ReserveTable";

type MTProps = {
  state: string;
};

export default function TableController<T>(p: MTProps) {
  return (() => {
    if (p.state == "guests") {
      return <GuestsTable />;
    }
    if (p.state == "reserve") {
      return <ReserveTable />;
    }
  })();
}
