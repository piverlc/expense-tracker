import Box from "@mui/joy/Box";
import { FC, Fragment, useState } from "react";
import { IExpenses } from "../../types";
import ExpenseForm from "./ExpenseForm";
import NewExpenseButton from "./NewExpenseButton";

type NewExpenseProps = { onAddExpense: (expense: IExpenses) => void };

const NewExpense: FC<NewExpenseProps> = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: IExpenses) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "#a892ee",
          padding: "1rem",
          margin: "2rem auto",
          width: "50rem",
          maxWidth: "95%",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        {!isEditing && (
          <NewExpenseButton onClick={startEditingHandler}>
            Add New Expense
          </NewExpenseButton>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </Box>
    </Fragment>
  );
};

export default NewExpense;
