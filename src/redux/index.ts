import { configureStore } from "@reduxjs/toolkit";

import { DataSlice } from "./DataSlice";
import { SidebarSlice } from "./SidebarSlice";
import { TableSlice } from "./TableSlice";

export const store = configureStore({
  reducer: {
    data: DataSlice.reducer,
    sidebar: SidebarSlice.reducer,
    table: TableSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
