import "./styles/MyTrips.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getTripsFromLocalStorage,
  removeTripFromLocalStorage,
} from "../services/myTripsStorage";

export default function MyTrips() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    const myTrips = getTripsFromLocalStorage();
    setTrips(myTrips);
  }, []);
  function handleRemoveTrip(trip) {
    removeTripFromLocalStorage(trip);
    const myTrips = getTripsFromLocalStorage();
    setTrips(myTrips);
  }
  function renderMyTrips() {
    return trips.map((trip) => {
      return (
        <div key={trip.name} className="myTripsList">
          <button onClick={() => handleRemoveTrip(trip.name)}>x</button>
          <Link to="/myTrips/:id">
            <span>{trip.name}</span>
          </Link>
          <span>
            ({trip.start} / {trip.end})
          </span>
        </div>
      );
    });
  }
  return (
    <div className="MyTrips">
      <h2>My Trips</h2>
      {renderMyTrips()}
      <Link to="/newTrip">Add a New Trip</Link>
      <Link to="/worldMap">World Map</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
