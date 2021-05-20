import "./styles/MyTrips.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTripsFromLocalStorage } from "../services/myTripsStorage";

import TripCard from "./TripCard";

export default function MyTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const myTrips = getTripsFromLocalStorage();
    setTrips(myTrips);
  }, []);

  function handleRemoveTrip(name) {
    const confirmation = window.confirm(
      "Do you really want to delete your Trip?"
    );
    if (confirmation === true) {
      removeTripFromLocalStorage(name);
      const myTrips = getTripsFromLocalStorage();
      setTrips(myTrips);
    }
  }

  function removeTripFromLocalStorage(tripName) {
    const myTrips = getTripsFromLocalStorage();
    const newTrips = myTrips.filter((trip) => {
      return trip.name !== tripName;
    });
    localStorage.setItem("tripData", JSON.stringify(newTrips));
  }

  function renderMyTrips() {
    return trips.map((trip) => {
      const startDay = trip.start.slice(8, 10);
      const startMonth = new Date(trip.start).toLocaleString("default", {
        month: "short",
      });
      const endDay = trip.end.slice(8, 10);
      const endMonth = new Date(trip.end).toLocaleString("default", {
        month: "short",
      });

      return (
        <TripCard
          key={trip.id}
          handleRemoveTrip={handleRemoveTrip}
          name={trip.name}
          id={trip.id}
          endDate={trip.end}
          transportation={trip.transportation}
          startDay={startDay}
          startMonth={startMonth}
          endDay={endDay}
          endMonth={endMonth}
        />
      );
    });
  }
  return (
    <div className="MyTrips">
      <div className="myTripsHeader">
        <h2>MY TRIPS</h2>
        <Link to="/newTrip" className="myTripsHeaderButton">
          <i className="fas fa-plus"></i>
        </Link>
      </div>
      <div className="myTripsMain">
        {trips.length < 1 && (
          <p className="noTripsText">You don't have any trips yet</p>
        )}
        {renderMyTrips()}
      </div>

      <div className="myTripsFooter">
        <Link to="/" className="myTripsButtonHome">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/worldMap" className="myTripsButtonWorldMap">
          <i className="fas fa-globe-africa"></i> Travel Map
        </Link>
      </div>
    </div>
  );
}
