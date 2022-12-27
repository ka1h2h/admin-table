import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { GuestSlice } from "./guest/GuestsSlice";
import { ReserveSlice } from "./ReserveSlice";

import { SidebarSlice } from "./SidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: SidebarSlice.reducer,
    reserve: ReserveSlice.reducer,
    guests: GuestSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
