import "./styles/MyTrips.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTripsFromLocalStorage } from "../services/myTripsStorage";

export default function MyTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const myTrips = getTripsFromLocalStorage();
    setTrips(myTrips);
  }, []);

  function handleRemoveTrip(trip) {
    const confirmation = window.confirm(
      "Do you really want to delete your Trip?"
    );
    if (confirmation === true) {
      removeTripFromLocalStorage(trip);
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
      const startMonth = trip.start.slice(5, 7);
      const endDay = trip.end.slice(8, 10);
      const endMonth = trip.end.slice(5, 7);

      return (
        <div key={trip.id} className="myTripsItem">
          <button
            className="removeButton"
            onClick={() => handleRemoveTrip(trip.name)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <div>
            {trip.transportation === "car" && (
              <span className="transportTypeIcon">
                <i className="fas fa-car"></i>
              </span>
            )}
            {trip.transportation === "bus" && (
              <span className="transportTypeIcon">
                <i className="fas fa-bus"></i>
              </span>
            )}
            {trip.transportation === "train" && (
              <span className="transportTypeIcon">
                <i className="fas fa-train"></i>
              </span>
            )}
            {trip.transportation === "plane" && (
              <span className="transportTypeIcon">
                <i className="fas fa-plane"></i>
              </span>
            )}
            {trip.transportation === "other" && (
              <span className="transportTypeIcon">
                <i className="fas fa-suitcase"></i>
              </span>
            )}
            {trip.transportation === "none" && (
              <span className="transportTypeIcon">
                <i className="fas fa-suitcase"></i>
              </span>
            )}
            {trip.transportation === "" && (
              <span className="transportTypeIcon">
                <i className="fas fa-suitcase"></i>
              </span>
            )}
            <span className="tripName">{trip.name}</span>
          </div>
          <hr></hr>
          <div className="tripDates">
            <div className="tripStart">
              {startDay}.{startMonth}
            </div>
            <div className="tripEnd">
              {endDay}.{endMonth}
            </div>
          </div>
          <Link to={`/myTrips/${trip.id}`}>
            <button className="tripViewButton">View</button>
            <div className="barcode">
              <i className="fas fa-barcode"></i>
              <i className="fas fa-barcode"></i>
              <i className="fas fa-barcode"></i>
              <i className="fas fa-barcode"></i>
            </div>
          </Link>
        </div>
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
