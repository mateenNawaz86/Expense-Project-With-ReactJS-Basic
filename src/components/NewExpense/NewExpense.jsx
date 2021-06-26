import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <Card className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          onCancle={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
