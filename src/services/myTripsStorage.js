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

export function editSingleTripFromLocalStorage(id, editedTrip) {
  const myTrips = getTripsFromLocalStorage();
  const singleTrip = myTrips.find((trip) => {
    return trip.id === id;
  });
  return singleTrip;
}

// export function editSingleTripToLocalStorage(id) {
//   const myTrip = getSingleTripFromLocalStorage(id);
//   localStorage.setItem("tripData", JSON.stringify(myTrip));
// }
