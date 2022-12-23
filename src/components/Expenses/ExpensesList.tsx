import Typography from "@mui/joy/Typography";
import { FC, Fragment } from "react";
import { ExpensesDataTypeI } from "../../types";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

type ExpensesListProps = { items: ExpensesDataTypeI[] };

const ExpensesList: FC<ExpensesListProps> = ({ items }) => {
  return (
    <Fragment>
      <br />
      {items.length === 0 && (
        <Typography
          className="expenses-list__fallback"
          level="h2"
          component="h2"
        >
          Found no expenses.
        </Typography>
      )}
      <br />
      <ul className="expenses-list">
        {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default ExpensesList;
