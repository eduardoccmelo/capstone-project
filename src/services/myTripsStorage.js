export function getTripsFromLocalStorage() {
  const myTrips = JSON.parse(localStorage.getItem("tripData")) || [];
  return myTrips;
}

export function addTripToLocalStorage(tripData) {
  const myTrips = getTripsFromLocalStorage();
  myTrips.push(tripData);
  localStorage.setItem("tripData", JSON.stringify(myTrips));
}

export function removeTripFromLocalStorage(tripName) {
  const myTrips = getTripsFromLocalStorage();
  const newTrips = myTrips.filter((trip) => {
    return trip.name !== tripName;
  });
  localStorage.setItem("tripData", JSON.stringify(newTrips));
}
