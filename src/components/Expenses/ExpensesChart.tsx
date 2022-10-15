import format from "date-fns/format";
import { FC, Fragment } from "react";
import { ExpensesDataTypeI } from "../../types";
import Chart from "../Chart/Chart";

type ExpensesChartProps = { expenses: ExpensesDataTypeI[] };

const ExpensesChart: FC<ExpensesChartProps> = ({ expenses }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = format(new Date(expense.date), "M");
    chartDataPoints[+expenseMonth - 1].value += expense.amount; // index starting at 0 => -1 to match value returned by format
  }

  return (
    <Fragment>
      <Chart dataPoints={chartDataPoints} />
    </Fragment>
  );
};

export default ExpensesChart;
