import "./styles/Trip.css";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleTripFromLocalStorage } from "../services/myTripsStorage";
import { useState, useEffect } from "react";

export default function Trip() {
  const history = useHistory();
  const [singleTrip, setSingleTrip] = useState();
  const { id } = useParams();

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setSingleTrip(myTrip);
  }, [id]);

  return singleTrip ? (
    <div className="TripDetails">
      <div className="tripDetailsHeader">
        <h2>TRIP DETAILS</h2>
      </div>
      <div className="tripDetailsContent">
        <div>
          <div className="tripDetailsFieldTitle">NAME</div>
          <div className="tripDetailsFieldContent">{singleTrip.name}</div>
        </div>
        <div>
          <div className="tripDetailsFieldTitle">START / END</div>
          <div className="tripDetailsFieldContent">
            {singleTrip.start.slice(8, 10)}.{singleTrip.start.slice(5, 7)}
            {" / "}
            {singleTrip.end.slice(8, 10)}.{singleTrip.end.slice(5, 7)}
          </div>
        </div>
        {singleTrip.transportation && (
          <div>
            <div className="tripDetailsFieldTitle">TRANSPORT</div>
            <div className="tripDetailsFieldContent">
              {singleTrip.transportation}
            </div>
          </div>
        )}
        {singleTrip.departure && (
          <div>
            <div className="tripDetailsFieldTitle">DEPARTURE</div>
            <div className="tripDetailsFieldContent">
              {singleTrip.departure}
            </div>
          </div>
        )}
        {singleTrip.arrival && (
          <div>
            <div className="tripDetailsFieldTitle">ARRIVAL</div>
            <div className="tripDetailsFieldContent">{singleTrip.arrival}</div>
          </div>
        )}
        {singleTrip.accommodation && (
          <div>
            <div className="tripDetailsFieldTitle">ACCOMMODATION</div>{" "}
            <div className="tripDetailsFieldContent">
              {singleTrip.accommodation}
            </div>
          </div>
        )}
        {singleTrip.checkinDate && (
          <div>
            <div className="tripDetailsFieldTitle">CHECK-IN DATE</div>
            <div className="tripDetailsFieldContent">
              {singleTrip.checkinDate.slice(8, 10)}.
              {singleTrip.checkinDate.slice(5, 7)}
            </div>
          </div>
        )}
        {singleTrip.checkinTime && (
          <div>
            <div className="tripDetailsFieldTitle">CHECK-IN TIME</div>
            <div className="tripDetailsFieldContent">
              {singleTrip.checkinTime}
            </div>
          </div>
        )}
        {singleTrip.checkoutDate && (
          <div>
            <div className="tripDetailsFieldTitle">CHECK-OUT DATE</div>
            <div className="tripDetailsFieldContent">
              {singleTrip.checkoutDate.slice(8, 10)}.
              {singleTrip.checkoutDate.slice(5, 7)}
            </div>
          </div>
        )}
        {singleTrip.checkoutTime && (
          <div>
            <div className="tripDetailsFieldTitle">CHECK-OUT TIME</div>
            <div className="tripDetailsFieldContent">
              {singleTrip.checkoutTime}
            </div>
          </div>
        )}
        {singleTrip.sightseeings.length !== 0 && (
          <div>
            <div className="tripDetailsFieldTitle">SIGHTSEEINGS</div>
            <div className="tripDetailsFieldContent">
              {singleTrip.sightseeings.map((sightseeing, index) => {
                if (singleTrip.sightseeings.length === index + 1) {
                  return sightseeing.sightseeing;
                }
                return sightseeing.sightseeing + ", ";
              })}
            </div>
          </div>
        )}
        {singleTrip.notes && (
          <div>
            <div className="tripDetailsFieldTitle">NOTES</div>
            <div className="tripDetailsFieldContent">{singleTrip.notes}</div>
          </div>
        )}
      </div>
      <div className="tripDetailsFooter">
        <Link className="editLink" to={`/myTrips/${singleTrip.id}/edit`}>
          <button className="editTripButton">Edit</button>
        </Link>
        <button
          className="editTripCancelButton"
          onClick={() => history.push("/myTrips")}
        >
          Back
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
