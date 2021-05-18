export default function Expenses({
  name,
  value,
  currency,
  onClickExpenseRemove,
}) {
  return (
    <div className="expenseItem">
      <span>
        {name} - {currency}
        {value}
      </span>
      <button
        className="removeExpense"
        type="button"
        onClick={() => onClickExpenseRemove(name)}
      >
        X
      </button>
    </div>
  );
}
