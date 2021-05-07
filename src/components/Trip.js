import "./styles/Trip.css";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleTripFromLocalStorage } from "../services/myTripsStorage";
import { useState, useEffect } from "react";

export default function Trip() {
  const history = useHistory();
  const [singleTrip, setSingleTrip] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setSingleTrip(myTrip);
  }, [id]);

  console.log(singleTrip);
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
            {singleTrip.start.slice(8, 10)} / {singleTrip.end}
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
            <div className="tripDetailsFieldTitle">DEPARTURE</div>{" "}
            <div className="tripDetailsFieldContent">
              {singleTrip.departure}{" "}
              {singleTrip.arrival && <span> / {singleTrip.arrival}</span>}
            </div>
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
            <div className="tripDetailsFieldTitle">CHECK-IN DATE / TIME </div>
            <div className="tripDetailsFieldContent">
              {singleTrip.checkinDate}{" "}
              {singleTrip.checkinTime && (
                <span>/ {singleTrip.checkinTime}</span>
              )}
            </div>
          </div>
        )}

        {singleTrip.checkoutDate && (
          <div>
            <div className="tripDetailsFieldTitle">CHECK-OUT DATE / TIME </div>
            <div className="tripDetailsFieldContent">
              {singleTrip.checkoutDate}{" "}
              {singleTrip.checkoutTime && (
                <span>/ {singleTrip.checkoutTime}</span>
              )}
            </div>
          </div>
        )}
        {singleTrip.sightseeing && (
          <div>
            <div className="tripDetailsFieldTitle">NOTES</div>
            <div className="tripDetailsFieldContent">
              {singleTrip.sightseeing}
            </div>
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
