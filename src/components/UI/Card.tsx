import Sheet from "@mui/joy/Sheet";
import { FC, Fragment } from "react";
import "./Card.css";

type CardProps = {
  children: React.ReactNode;
  className: string;
};

const Card: FC<CardProps> = ({ children, className }) => {
  const classes = "card " + className;

  return (
    <Fragment>
      <Sheet className={classes}>{children}</Sheet>
    </Fragment>
  );
};

export default Card;
