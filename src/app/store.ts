import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer, { RootStateType } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>;
