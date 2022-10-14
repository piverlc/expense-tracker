import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import { FC, Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { IExpenses } from "../../types";
import NewExpenseButton from "./NewExpenseButton";

type ExpenseFormProps = {
  onSaveExpenseData: (enteredExpenseData: IExpenses) => void;
  onCancel: () => void;
};

const ExpenseForm: FC<ExpenseFormProps> = ({ onCancel, onSaveExpenseData }) => {
  const { register, handleSubmit } = useForm<IExpenses>();

  const submitHandler: SubmitHandler<IExpenses> = (data: IExpenses) => {
    const expenseData = {
      id: uuidv4(),
      title: data.title,
      amount: data.amount,
      date: new Date(data.date),
    };
    onSaveExpenseData(expenseData);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1rem",
            textAlign: "left",
          }}
        >
          <TextField
            size="lg"
            autoFocus
            type="text"
            label="Title"
            variant="outlined"
            id="new-expense__title"
            placeholder="Expense title"
            {...register("title", { required: true })}
          />
          <TextField
            size="lg"
            type="number"
            label="Amount"
            variant="outlined"
            id="new-expense__amount"
            placeholder="Expense amount"
            {...register("amount", { required: true })}
          />
          <TextField
            size="lg"
            type="date"
            label="Date"
            min="2019-01-01"
            max="2022-12-31"
            variant="outlined"
            id="new-expense__date"
            {...register("date", { required: true })}
          />
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <NewExpenseButton type="button" onClick={onCancel}>
            Cancel
          </NewExpenseButton>
          <NewExpenseButton type="submit">Add Expense</NewExpenseButton>
        </Box>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
