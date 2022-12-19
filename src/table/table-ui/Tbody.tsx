type MTProps<T> = {
  data: T[];
};

export default function Tbody<T>(p: MTProps<T>) {
  return (
    <>
      {p.data.map((td: any, index: number) => {
        return (
          <tr>
            {Object.values(td).map((item: any) => {
              return <td>{item}</td>;
            })}
          </tr>
        );
      })}
    </>
  );
}
