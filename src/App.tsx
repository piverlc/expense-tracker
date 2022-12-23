import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider } from "@mui/joy/styles";
import { Fragment } from "react";
import { ThemeModeToggle } from "./common/theme/ThemeModeToggle";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useBearStore } from "./state";
import { ExpensesDataTypeI } from "./types";

const App = () => {
  const expenses = useBearStore((state) => state.expenses);
  const setExpenses = useBearStore((state) => state.setExpenses);

  const addExpenseHandler = (expense: ExpensesDataTypeI) => {
    setExpenses(expense);
  };
  return (
    <Fragment>
      <CssVarsProvider>
        <Sheet>
          <ThemeModeToggle />
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </Sheet>
      </CssVarsProvider>
    </Fragment>
  );
};

export default App;
