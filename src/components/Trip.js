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
      <div className="tripDetailsHeader">
        <h2>TRIP DETAILS</h2>
      </div>
      <div className="tripDetailsContent">
        <p>NAME: {singleTrip.name}</p>
        <p>START: {singleTrip.start}</p>
        <p>END: {singleTrip.end}</p>
        <p>TRANSPORT: {singleTrip.transportation}</p>
        <p>DEPARTURE: {singleTrip.departure}</p>
        <p>ARRIVAL: {singleTrip.arrival}</p>
        <p>ACCOMMODATION: {singleTrip.accommodation}</p>
        <p>CHECK-IN DATE: {singleTrip.checkinDate}</p>
        <p>CHECK-IN TIME: {singleTrip.checkinTime}</p>
        <p>CHECK-OUT DATE: {singleTrip.checkoutDate}</p>
        <p>CHECK-OUT TIME: {singleTrip.checkoutTime}</p>
        <p>NOTES: {singleTrip.sightseeing}</p>
      </div>
      <div className="tripDetailsFooter">
        <Link className="editLink" to={`/myTrips/${singleTrip.id}/edit`}>
          <button className="editTripButton">Edit</button>
        </Link>
        <button
          className="editTripCancelButton"
          onClick={() => history.goBack()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
