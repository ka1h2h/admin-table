import { useAppSelector } from "./redux/hooks";
import { UserData } from "./redux/UserSlice";

export const App: React.FC = () => {
  interface IMix {
    name: string;
    id: number;
    phone: string;
    email: string;
    city: string;
  } // спросить у Паши, есть ли возможность не перечислять каждое поле, ведь их может быть и 100

  const rows = useAppSelector((state) => state.user.content);
  return (
    <div>
      {Object.values(rows).map((item: IMix, index: number) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};
