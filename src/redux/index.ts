import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { GuestSlice } from "./GuestsSlice";
import { ReserveSlice } from "./ReserveSlice";

import { SidebarSlice } from "./SidebarSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    sidebar: SidebarSlice.reducer,
    reserve: ReserveSlice.reducer,
    guests: GuestSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
