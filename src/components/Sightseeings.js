export default function Sightseeings({ name, onClickToRemove }) {
  return (
    <div className="sightseeingItem">
      <span>{name}</span>
      <button
        type="button"
        className="removeSightseeing"
        onClick={() => onClickToRemove(name)}
      >
        X
      </button>
    </div>
  );
}
