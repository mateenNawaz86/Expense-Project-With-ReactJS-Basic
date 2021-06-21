import "./ExpenseDate.css";

function ExpenseDate(props) {
  // Here fetch the month dynamically
  const month = props.date.toLocaleString("en-US", { month: "long" });

  // Here fetch the day dynamically
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  // Here fetch the year dynamically
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
