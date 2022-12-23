import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Stack from "@mui/system/Stack";
import { format } from "date-fns/esm";
import { FC, Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { ExpensesDataTypeI } from "../../types";
import NewExpenseButton from "./NewExpenseButton";

type ExpenseFormProps = {
  onSaveExpenseData: (enteredExpenseData: ExpensesDataTypeI) => void;
  onCancel: () => void;
};

const ExpenseForm: FC<ExpenseFormProps> = ({ onCancel, onSaveExpenseData }) => {
  const { register, handleSubmit } = useForm<ExpensesDataTypeI>();

  const submitHandler: SubmitHandler<ExpensesDataTypeI> = (
    data: ExpensesDataTypeI
  ) => {
    const id = uuidv4();
    const date = format(new Date(data.date), "yyyy-MM-dd");
    const { title, amount } = data;
    const expenseData = {
      id,
      title,
      amount,
      date,
    };
    onSaveExpenseData(expenseData);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Box
          sx={{
            // display: "flex",
            // flexWrap: "wrap",
            // gap: "1rem",
            marginBottom: "1rem",
            // textAlign: "left",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
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
          </Stack>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <NewExpenseButton type="button" onClick={onCancel}>
              Cancel
            </NewExpenseButton>
            <NewExpenseButton type="submit">Add Expense</NewExpenseButton>
          </Stack>
        </Box>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
