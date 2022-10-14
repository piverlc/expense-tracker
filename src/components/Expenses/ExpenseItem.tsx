import { FC, Fragment } from "react";
import Card from "../../common/layout/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

type ExpenseItemProps = {
  name: string;
  amount: number;
  date: Date;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ name, amount, date }) => {
  return (
    <Fragment>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={date} />
          <div className="expense-item__description">
            <h2>{name}</h2>
          </div>
          <div className="expense-item__price">
            <>&#8377;</>
            {amount}
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default ExpenseItem;
