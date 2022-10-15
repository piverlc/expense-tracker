import { format } from "date-fns";
import { FC, Fragment, useState } from "react";
import Card from "../../common/layout/Card";
import { ExpensesDataTypeI } from "../../types";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

type ExpensesProps = { items: ExpensesDataTypeI[] };

const Expenses: FC<ExpensesProps> = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    if (filteredYear === "All") {
      return expense;
    }
    return format(new Date(expense.date), "Y") === filteredYear;
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
