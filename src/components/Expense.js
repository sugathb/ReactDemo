import ExpenseItem from "./ExpenseItem";
import "./Expense.css";

function Expense(props) {
  return (
    <div className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
      ))}
    </div>
  );
}

export default Expense;
