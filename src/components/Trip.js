import "./styles/Trip.css";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleTripFromLocalStorage } from "../services/myTripsStorage";
import { useState, useEffect } from "react";

export default function Trip() {
  const history = useHistory();
  const [singleTrip, setSingleTrip] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setSingleTrip(myTrip);
  }, [id]);

  return (
    <div className="TripDetails">
      <h2>Trip Details</h2>
      <p>ID: {singleTrip.id}</p>
      <p>NAME: {singleTrip.name}</p>
      <Link to={`/myTrips/${singleTrip.id}/edit`}>Edit</Link>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}
