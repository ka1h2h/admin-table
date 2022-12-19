import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import "./../index.css";

type TSidebarProps<T> = {
  table: string;
  link: string;
  eventHanlder(link: string): void;
};

export default function SidebarItem<T>(p: TSidebarProps<T>) {
  return (
    <NavLink
      to={p.link}
      onClick={(e) => p.eventHanlder(p.link)}
      className={({ isActive }) =>
        isActive ? "active-sidebar-list" : "inactive"
      }
    >
      <li className="sidebar__list-item">{p.table}</li>
    </NavLink>
  );
}
