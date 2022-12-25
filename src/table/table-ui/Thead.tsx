type MTProps<T> = {
  columns: Array<{
    name: string;
  }>;
};

export default function Thead<T>(p: MTProps<T>) {
  return (
    <thead>
      <tr>
        {p.columns.map((item: any, index) => {
          return <th>{item.name}</th>;
        })}
      </tr>
    </thead>
  );
}
