import { FC, Fragment } from "react";
import { IExpenses } from "../../types";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

type ExpensesListProps = { items: IExpenses[] };

const ExpensesList: FC<ExpensesListProps> = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <Fragment>
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
