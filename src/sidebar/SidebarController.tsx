import { SetStateAction } from "react";
import { useAppSelector } from "../redux/hooks";
import SidebarItem from "./SidebarItem";

type MTProps = {
  setState: React.Dispatch<SetStateAction<string>>;
};

export default function SidebarController<T>(p: MTProps) {
  const sidebarItems = useAppSelector((s) => s.sidebar.sideBar);

  const eventHanlder = (currentLink: string) => p.setState(currentLink);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <ul className="sidebar__list px-0">
          {sidebarItems.map((item) => {
            return (
              <SidebarItem
                table={item.table}
                link={item.link}
                eventHanlder={eventHanlder}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
