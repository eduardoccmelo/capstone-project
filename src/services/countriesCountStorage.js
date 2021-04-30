export function getCountriesCountFromLocalStorage() {
  const myCountriesCount = JSON.parse(localStorage.getItem("count")) || [];
  return myCountriesCount;
}

export function addCountryCountToLocalStorage() {
  const myCountriesCount = getCountriesCountFromLocalStorage();
  const newCount = Number(myCountriesCount) + 1;
  localStorage.setItem("count", JSON.stringify(newCount));
}

export function removeCountryCountFromLocalStorage() {
  const myCountriesCount = getCountriesCountFromLocalStorage();
  const newCount = Number(myCountriesCount) - 1;
  localStorage.setItem("count", JSON.stringify(newCount));
}
