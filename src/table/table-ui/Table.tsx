import Tbody from "./Tbody";
import Thead from "./Thead";

type MTProps<T> = {
  // columns: Array<{
  //   name: string;
  //   property: keyof T;
  // }>;
  data: any[];
};
export default function Table<T>(p: MTProps<T>) {
  return (
    <div className="content">
      <div className="content-table mt-5">
        <table className="table">
          <Thead />
          <Tbody data={p.data} />
        </table>
      </div>
    </div>
  );
}
