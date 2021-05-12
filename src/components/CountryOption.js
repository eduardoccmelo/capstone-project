export default function CountryOption({
  name,
  latlng,
  flag,
  handleClick,
  getCheckboxState,
}) {
  return (
    <div className="countryName">
      <input
        onChange={(e) => handleClick(e, latlng, name)}
        className="checkbox"
        type="checkbox"
        value={name}
        checked={getCheckboxState(name)}
      ></input>

      <span>
        <img className="countryFlag" alt={flag} src={flag}></img>
        {name}
      </span>
    </div>
  );
}
