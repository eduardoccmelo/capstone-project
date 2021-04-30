export function getTripsFromLocalStorage() {
  const myTrips = JSON.parse(localStorage.getItem("tripData")) || [];
  return myTrips;
}

export function getSingleTripFromLocalStorage(id) {
  const myTrips = getTripsFromLocalStorage();
  const singleTrip = myTrips.find((trip) => {
    return trip.id === id;
  });
  return singleTrip;
}

export function addTripToLocalStorage(tripData) {
  const myTrips = getTripsFromLocalStorage();
  myTrips.push(tripData);
  localStorage.setItem("tripData", JSON.stringify(myTrips));
}
