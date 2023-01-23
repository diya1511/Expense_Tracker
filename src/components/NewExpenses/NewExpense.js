import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  const cancelButton = () => {
    setShowForm(false);
  };
  const formOpenClose = () => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button className="new-expense__actions" onClick={formOpenClose}>
          New Expenses
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelButton}
        />
      )}
    </div>
  );
}
export default NewExpense;
