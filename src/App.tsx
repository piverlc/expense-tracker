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
  // const [expenses, setExpenses] =
  //   useState<ExpensesDataTypeI[]>(INITIAL_EXPENSES);

  const exp = useAppSelector(selectExpenses);
  const dispatch = useAppDispatch();

  console.log("from store...", exp);
  const addExpenseHandler = (expense: ExpensesDataTypeI) => {
    // setExpenses((pervExpenses) => {
    //   return [expense, ...pervExpenses];
    // });
    dispatch(setExpenses(expense));

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
        <Expenses items={exp} />
      </CssVarsProvider>
    </Fragment>
  );
};

export default App;
