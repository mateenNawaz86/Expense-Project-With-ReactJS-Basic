import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Paper",
    amount: 92.12,
    date: new Date(2020, 7, 12),
  },
  {
    id: "e2",
    title: "Mango",
    amount: 21,
    date: new Date(2021, 2, 7),
  },
  {
    id: "e3",
    title: "University Fee",
    amount: 209.32,
    date: new Date(2021, 4, 5),
  },
  {
    id: "e4",
    title: "Tour Expense",
    amount: 102.43,
    date: new Date(2020, 10, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (newAddedExp) => {
    setExpenses((prevExpense) => {
      return [newAddedExp, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
