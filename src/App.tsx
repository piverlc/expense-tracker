import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider } from "@mui/joy/styles";
import { Fragment, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { INITIAL_EXPENSES } from "./data/INITIAL_EXPENSES";
import { ThemeModeToggle } from "./theme/ThemeModeToggle";
import { IExpenses } from "./types";

const App = () => {
  const [expenses, setExpenses] = useState<IExpenses[]>(INITIAL_EXPENSES);

  const addExpenseHandler = (expense: IExpenses) => {
    setExpenses((pervExpenses) => {
      return [expense, ...pervExpenses];
    });
    console.log("In App.js");
    console.log(expense);
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
