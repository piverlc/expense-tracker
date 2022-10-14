import { IExpenses } from "../types";

export const INITIAL_EXPENSES: IExpenses[] = [
  {
    id: "e1",
    title: "Smartphone",
    amount: 22000,
    date: new Date(2020, 0, 1),
  },
  {
    id: "e2",
    title: "Keyboard & Mouse",
    amount: 1200,
    date: new Date(2020, 3, 28),
  },
  {
    id: "e3",
    title: "Ear pods",
    amount: 1250,
    date: new Date(2021, 7, 31),
  },
  {
    id: "e4",
    title: "Mobile Case",
    amount: 300,
    date: new Date(2022, 11, 3),
  },
  {
    id: "e5",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e6",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e7",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e8",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e9",
    title: "Appetizer - Sausage Rolls",
    amount: 284.38,
    date: new Date("2022-02-27"),
  },
  {
    id: "e10",
    title: "Doilies - 8, Paper",
    amount: 775.28,
    date: new Date("2019-08-29"),
  },
];
