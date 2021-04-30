export function getMarkersFromLocalStorage() {
  const myMarkers = JSON.parse(localStorage.getItem("markerData")) || [];
  return myMarkers;
}

export function addMarkerToLocalStorage(markerData) {
  const myMarkers = getMarkersFromLocalStorage();
  myMarkers.push(markerData);
  localStorage.setItem("markerData", JSON.stringify(myMarkers));
}
