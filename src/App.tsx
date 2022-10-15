import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider } from "@mui/joy/styles";
import { Fragment } from "react";
import { ThemeModeToggle } from "./common/theme/ThemeModeToggle";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useAppDispatch, useAppSelector } from "./redux/app/hooks";
import {
  selectExpenses,
  setExpenses,
} from "./redux/features/expenses/expensesSlice";
import { ExpensesDataTypeI } from "./types";

const App = () => {
  const expenses = useAppSelector(selectExpenses);
  const dispatch = useAppDispatch();

  const addExpenseHandler = (expense: ExpensesDataTypeI) => {
    dispatch(setExpenses(expense));
  };

  return (
    <Fragment>
      <CssVarsProvider>
        <Sheet>
          <ThemeModeToggle />
        </Sheet>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </CssVarsProvider>
    </Fragment>
  );
};

export default App;
