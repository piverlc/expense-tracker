import { FC, Fragment } from "react";
import "./ExpenseDate.css";

type ExpenseDateProps = {
  date: Date;
};

const ExpenseDate: FC<ExpenseDateProps> = ({ date }) => {
  const day = date.toLocaleString("en-GB", { day: "2-digit" });
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  return (
    <Fragment>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day ">{day}</div>
      </div>
    </Fragment>
  );
};

export default ExpenseDate;
