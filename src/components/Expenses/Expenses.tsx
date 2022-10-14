import { FC, Fragment, useState } from "react";
import { IExpenses } from "../../types";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

type ExpensesProps = { items: IExpenses[] };

const Expenses: FC<ExpensesProps> = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    if (filteredYear === "All") {
      return expense;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Fragment>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </Fragment>
  );
};

export default Expenses;
