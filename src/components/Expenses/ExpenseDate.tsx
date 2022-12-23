import format from "date-fns/format";
import { FC, Fragment, useEffect, useState } from "react";
import "./ExpenseDate.css";

type ExpenseDateProps = {
  date: string;
};

const ExpenseDate: FC<ExpenseDateProps> = ({ date }) => {
  const [month, setMonth] = useState<string>("01");
  const [year, setYear] = useState<string>("2022");
  const [day, setDay] = useState<string>("01");

  useEffect(() => {
    if (!!month) {
      const formattedMonth = format(new Date(date), "MMMM");
      setMonth(formattedMonth);
    }
    if (!!year) {
      const formattedYear = format(new Date(date), "Y");
      setYear(formattedYear);
    }
    if (!!day) {
      const formattedDay = format(new Date(date), "d");
      setDay(formattedDay);
    }
  }, []);

  return (
    <Fragment>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </Fragment>
  );
};

export default ExpenseDate;
