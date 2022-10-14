import Box from "@mui/joy/Box";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import Typography from "@mui/joy/Typography";
import { FC, Fragment } from "react";

type ExpensesFilterProps = {
  onChangeFilter: (selectedYear: string) => void;
  selected: string;
};

const ExpensesFilter: FC<ExpensesFilterProps> = ({
  onChangeFilter,
  selected,
}) => {
  const dropdownChangeHandler = (newValue: string | null) => {
    onChangeFilter(newValue!);
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <Typography
          sx={{
            color: "blueviolet",
            padding: "0 1rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
          level="h4"
        >
          Filter by year
        </Typography>
        <Select
          value={selected}
          defaultValue="All"
          onChange={(_e, newValue) => dropdownChangeHandler(newValue)}
        >
          <Option value="All">All</Option>
          <Option value="2022">2022</Option>
          <Option value="2021">2021</Option>
          <Option value="2020">2020</Option>
          <Option value="2019">2019</Option>
        </Select>
      </Box>
    </Fragment>
  );
};

export default ExpensesFilter;
