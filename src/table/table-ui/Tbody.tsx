import { Link, NavLink } from "react-router-dom";

type MTProps<T> = {
  data: T[];
};

export default function Tbody<T>(p: MTProps<T>) {
  return (
    <tbody>
      {p.data.map((td: any, index: number) => {
        return (
          <tr>
            {Object.values(td).map((item: any) => {
              return (
                <td>
                  <Link to={`edit/${td.id}`}>{item}</Link>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
