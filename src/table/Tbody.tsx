type MTProps<T> = {
  // columns: Array<{
  //   name: string;
  //   property: keyof T;
  // }>;
  data: T[];
};

export default function Tbody<T>(p: MTProps<T>) {
  console.log(p.data);
  return (
    <tbody>
      {p.data.map((td: any, index: number) => {
        return (
          <tr>
            {td.map((item: any) => {
              return <td>{td[item]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
