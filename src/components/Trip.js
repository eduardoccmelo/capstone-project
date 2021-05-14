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
      <div className="tripDetailsTitle">{singleTrip.name}</div>
      <div className="tripDetailsContent">
        <div>
          <div className="tripDetailsFieldTitle">START / END</div>
          <div className="tripDetailsFieldContent">
            <i className="far fa-calendar-check"></i>
            {singleTrip.start.slice(8, 10)}.{singleTrip.start.slice(5, 7)}
            {" / "}
            {singleTrip.end.slice(8, 10)}.{singleTrip.end.slice(5, 7)}
          </div>
        </div>
        {singleTrip.transportation && (
          <div>
            <div className="tripDetailsFieldTitle">TRANSPORTATION TYPE</div>
            <div className="tripDetailsFieldContent capitalize">
              {singleTrip.transportation}
            </div>
          </div>
        )}
        {singleTrip.departure && (
          <div>
            <div className="tripDetailsFieldTitle">DEPARTURE</div>
            <div className="tripDetailsFieldContent">
              <i className="far fa-clock"></i>
              {singleTrip.departure}
            </div>
            {singleTrip.arrival && (
              <div>
                <div className="tripDetailsFieldTitle">ARRIVAL</div>
                <div className="tripDetailsFieldContent">
                  <i className="far fa-clock"></i>
                  {singleTrip.arrival}
                </div>
              </div>
            )}
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
            <div className="tripDetailsFieldTitle">CHECK-IN</div>
            <div className="tripDetailsFieldContent">
              <i className="far fa-calendar-alt"></i>
              {singleTrip.checkinDate.slice(8, 10)}.
              {singleTrip.checkinDate.slice(5, 7)}
            </div>
            {singleTrip.checkinTime && (
              <div>
                <div className="tripDetailsFieldTitle">TIME</div>
                <div className="tripDetailsFieldContent">
                  <i className="far fa-clock"></i>
                  {singleTrip.checkinTime}
                </div>
              </div>
            )}
          </div>
        )}

        {singleTrip.checkoutDate && (
          <div>
            <div className="tripDetailsFieldTitle">CHECK-OUT</div>
            <div className="tripDetailsFieldContent">
              <i className="far fa-calendar-alt"></i>
              {singleTrip.checkoutDate.slice(8, 10)}.
              {singleTrip.checkoutDate.slice(5, 7)}
            </div>
            {singleTrip.checkoutTime && (
              <div>
                <div className="tripDetailsFieldTitle">TIME</div>
                <div className="tripDetailsFieldContent">
                  <i className="far fa-clock"></i>
                  {singleTrip.checkoutTime}
                </div>
              </div>
            )}
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
