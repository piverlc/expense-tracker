import { useEffect, useState } from "react";

export const useExpenseTitle = () => {
  const [title, setTitle] = useState("Expense Tracker");
  useEffect(() => {
    setTitle((document.title = title));
  }, [title]);
  return { title } as const;
};
