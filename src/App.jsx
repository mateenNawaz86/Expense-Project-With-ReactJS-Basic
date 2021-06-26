import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: 1,
    title: "Fruit Budget",
    date: new Date(2018, 9, 15),
    amount: 32.12,
  },
  {
    id: 2,
    title: "Vegetable Budget",
    date: new Date(2019, 1, 8),
    amount: 45.21,
  },
  {
    id: 3,
    title: "Car Insurance",
    date: new Date(2020, 2, 26),
    amount: 321.1,
  },
  {
    id: 4,
    title: "House Rent",
    date: new Date(2021, 4, 9),
    amount: 123,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
