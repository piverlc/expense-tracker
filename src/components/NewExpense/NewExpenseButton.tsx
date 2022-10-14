import Button from "@mui/joy/Button";
import { FC, Fragment } from "react";

type NewExpenseButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string | undefined;
};

const NewExpenseButton: FC<NewExpenseButtonProps> = ({
  children,
  onClick,
  type,
}) => {
  return (
    <Fragment>
      <Button
        sx={{
          font: "inherit",
          cursor: "pointer",
          padding: "1rem 2rem",
          border: "1px solid #40005d",
          backgroundColor: "#40005d",
          color: "white",
          borderRadius: "12px",
          marginRight: "1rem",
          ":hover": {
            backgroundColor: "#510674",
            borderColor: "#510674",
          },
          ":active": {
            backgroundColor: "#510674",
            borderColor: "#510674",
          },
        }}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    </Fragment>
  );
};

export default NewExpenseButton;
