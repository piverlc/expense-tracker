import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { INITIAL_EXPENSES } from "../data/INITIAL_EXPENSES";
import { ExpensesDataTypeI } from "../types";

interface expensesStateI {
  expenses: ExpensesDataTypeI[];
  setExpenses: (expense: ExpensesDataTypeI) => void;
}

export const useBearStore = create<expensesStateI>()(
  devtools(
    persist(
      (set) => ({
        expenses: INITIAL_EXPENSES,
        setExpenses: (expense) => {
          set((state) => ({
            expenses: [...state.expenses, expense],
          }));
        },
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
