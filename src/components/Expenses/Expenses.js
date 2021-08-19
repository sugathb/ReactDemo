import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const expensesFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onExpensesFilterChange={expensesFilterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expense;
