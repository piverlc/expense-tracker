import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_EXPENSES } from "../../../data/INITIAL_EXPENSES";
import { ExpensesDataTypeI } from "../../../types";
import { RootState } from "../../app/store";

export interface expensesStateI {
  expenses: ExpensesDataTypeI[];
}

const initialState: expensesStateI = {
  expenses: INITIAL_EXPENSES,
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setExpenses: (state, actions: PayloadAction<ExpensesDataTypeI>) => {
      state.expenses.push(actions.payload);
    },
  },
});

export default expensesSlice.reducer;

export const { setExpenses } = expensesSlice.actions;

export const selectExpenses = (state: RootState) => state.expenses.expenses;
