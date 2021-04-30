export function getTripsFromLocalStorage() {
  const myTrips = JSON.parse(localStorage.getItem("tripData")) || [];
  return myTrips;
}

export function addTripToLocalStorage(tripData) {
  const myTrips = getTripsFromLocalStorage();
  myTrips.push(tripData);
  localStorage.setItem("tripData", JSON.stringify(myTrips));
}
