import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import expensesReducer from "../features/expenses/expensesSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
