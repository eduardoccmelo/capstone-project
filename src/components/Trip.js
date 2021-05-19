import "./styles/Trip.css";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleTripFromLocalStorage } from "../services/myTripsStorage";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Trip() {
  const history = useHistory();
  const [singleTrip, setSingleTrip] = useState();
  const { id } = useParams();
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setSingleTrip(myTrip);
  }, [id]);

  function sumFunction() {
    const sum = singleTrip.expenses.reduce(function (prev, cur) {
      return prev + cur.value;
    }, 0);
    return `${singleTrip.expenses[0].currency}${sum}`;
  }

  return singleTrip ? (
    <div className="TripDetails">
      <div className="tripDetailsHeader">
        <h2>TRIP DETAILS</h2>
      </div>
      <div className="tripDetailsTitle">{singleTrip.name}</div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="tripDetailsContent"
      >
        <div>
          <div className="tripDetailsFieldTitle">START / END</div>
          <div className="tripDetailsFieldContent">
            <i className="far fa-calendar-check"></i>
            {singleTrip.start.slice(8, 10)}.
            {new Date(singleTrip.start).toLocaleString("default", {
              month: "short",
            })}
            {" / "}
            {singleTrip.end.slice(8, 10)}.
            {new Date(singleTrip.end).toLocaleString("default", {
              month: "short",
            })}
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
              {new Date(singleTrip.checkinDate).toLocaleString("default", {
                month: "short",
              })}
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
              {new Date(singleTrip.checkoutDate).toLocaleString("default", {
                month: "short",
              })}
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
        {singleTrip.expenses.length !== 0 && (
          <div>
            <div className="tripDetailsFieldTitle">EXPENSES</div>
            <div className="tripDetailsFieldContent">{sumFunction()}</div>
          </div>
        )}
        {singleTrip.notes && (
          <div>
            <div className="tripDetailsFieldTitle">NOTES</div>
            <div className="tripDetailsFieldContent">{singleTrip.notes}</div>
          </div>
        )}
      </motion.div>
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
