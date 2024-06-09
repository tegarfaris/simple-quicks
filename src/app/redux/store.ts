import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { INBOX_REDUCER } from "./inbox";

export const store = configureStore({
  reducer: {
    inbox: INBOX_REDUCER,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
