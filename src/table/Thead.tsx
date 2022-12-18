import { useAppSelector } from "../redux/hooks";

type MTProps<T> = {
  columns: Array<{
    name: string;
    property: keyof T;
  }>;
};

export default function Thead<T>(p: MTProps<T>) {
  return (
    <thead>
      <tr>
        {Object.values(p.columns).map((item: any, index) => {
          return <th scope="col">{item}</th>;
        })}
      </tr>
    </thead>
  );
}
