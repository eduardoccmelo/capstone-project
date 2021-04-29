export function getMarkersFromLocalStorage() {
  const myMarkers = JSON.parse(localStorage.getItem("markerData")) || [];
  return myMarkers;
}

export function addMarkerToLocalStorage(markerData) {
  const myMarkers = getMarkersFromLocalStorage();
  myMarkers.push(markerData);
  localStorage.setItem("markerData", JSON.stringify(myMarkers));
}

export function removeMarkerFromLocalStorage(tripName) {
  const myMarkers = getMarkersFromLocalStorage();
  const newMarkers = myMarkers.filter((marker) => {
    return marker.name !== tripName;
  });
  localStorage.setItem("markerData", JSON.stringify(newMarkers));
}
