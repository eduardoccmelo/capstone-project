export function getTripsFromLocalStorage() {
  const myTrips = JSON.parse(localStorage.getItem("tripData")) || [];
  return myTrips;
}

export function getSingleTripFromLocalStorage(id) {
  const myTrips = getTripsFromLocalStorage();
  console.log(myTrips);
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

export function editSingleTripFromLocalStorage(id, updatedTrip) {
  const myTrips = getTripsFromLocalStorage();
  const updatedTrips = myTrips.map((trip) => {
    if (trip.id === id) {
      return { ...trip, ...updatedTrip };
    } else {
      return trip;
    }
  });
  localStorage.setItem("tripData", JSON.stringify(updatedTrips));
}
