import { NavLink } from "react-router-dom";
import { tableObserver } from "./redux/DataSlice";
import { useAppDispatch } from "./redux/hooks";
import { SidebarController } from "./redux/SidebarSlice";
import "./index.css";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <ul className="sidebar__list px-0">
          {Object.values(SidebarController.sidebarItemsLoader()).map(
            (item: any, index) => {
              return (
                <NavLink
                  to={item.link}
                  onClick={(e) => dispatch(tableObserver(item.link))}
                  className={({ isActive }) =>
                    isActive ? "active-sidebar-list" : "inactive"
                  }
                >
                  <li className="sidebar__list-item">{item.table} </li>
                </NavLink>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}
