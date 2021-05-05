import "./styles/NewTrip.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addTripToLocalStorage } from "../services/myTripsStorage";

export default function NewTrip() {
  const [inputDestinationName, setInputDestinationName] = useState("");
  const [inputTripStart, setInputTripStart] = useState("");
  const [inputTripEnd, setInputTripEnd] = useState("");
  const [inputTransportType, setInputTransportType] = useState("");
  const [inputTripDeparture, setInputTripDeparture] = useState("");
  const [inputTripArrival, setInputTripArrival] = useState("");
  const [inputTripAccommodation, setInputTripAccommodation] = useState("");
  const [inputCheckinDate, setInputCheckinDate] = useState("");
  const [inputCheckinTime, setInputCheckinTime] = useState("");
  const [inputCheckoutDate, setInputCheckoutDate] = useState("");
  const [inputCheckoutTime, setInputCheckoutTime] = useState("");
  const [inputSightseeing, setInputSightseeing] = useState("");
  const history = useHistory();

  function handleOnSubmit(e) {
    e.preventDefault();

    addTripToLocalStorage({
      id: `${inputDestinationName.slice(
        0,
        1
      )}${inputTripStart}${inputTripEnd}${inputDestinationName.slice(1, 2)}`,
      name: inputDestinationName,
      start: inputTripStart,
      end: inputTripEnd,
      transportation: inputTransportType,
      departure: inputTripDeparture,
      arrival: inputTripArrival,
      accommodation: inputTripAccommodation,
      checkinDate: inputCheckinDate,
      checkinTime: inputCheckinTime,
      checkoutDate: inputCheckoutDate,
      checkoutTime: inputCheckoutTime,
      sightseeing: inputSightseeing,
    });
    history.push("/myTrips");
  }

  return (
    <div className="NewTrip">
      <div className="newTripHeader">
        <h2>NEW TRIP</h2>
      </div>

      <form className="NewTripForm" onSubmit={handleOnSubmit}>
        <div className="formHeader">
          <label className="tripNameForm" htmlFor="tripName">
            Destination Name
            <input
              onChange={(e) => {
                setInputDestinationName(e.target.value);
              }}
              value={inputDestinationName}
              id="tripName"
              type="text"
              placeholder="Type your destination"
              maxLength="10"
              required
            ></input>
          </label>
        </div>
        <div className="formTravelDates">
          <label className="tripStartForm" htmlFor="tripStart">
            START
            <input
              onChange={(e) => {
                setInputTripStart(e.target.value);
              }}
              id="tripStart"
              type="date"
              required
            ></input>
          </label>

          <label className="tripEndForm" htmlFor="tripEnd">
            END
            <input
              onChange={(e) => {
                setInputTripEnd(e.target.value);
              }}
              id="tripEnd"
              type="date"
              required
            ></input>
          </label>
        </div>
        <div className="formTransport">
          <label className="tripTransportForm" htmlFor="tripTransportType">
            TRANSPORT
            <select
              onChange={(e) => {
                setInputTransportType(e.target.value);
              }}
              id="tripTransportType"
            >
              <option value="none">Transport Type</option>
              <option value="bus">Bus</option>
              <option value="car">Car</option>
              <option value="plane">Plane</option>
              <option value="train">Train</option>
              <option value="other">Other</option>
            </select>
          </label>

          <div className="departureArrival">
            <label className="inputTranportTimeForm" htmlFor="tripDeparture">
              DEPARTURE TIME
              <input
                onChange={(e) => {
                  setInputTripDeparture(e.target.value);
                }}
                id="tripDeparture"
                type="time"
              ></input>
            </label>

            <label className="inputTranportTimeForm" htmlFor="tripArrival">
              ARRIVAL TIME
              <input
                onChange={(e) => {
                  setInputTripArrival(e.target.value);
                }}
                id="tripArrival"
                type="time"
              ></input>
            </label>
          </div>
        </div>
        <div className="formAccommodation">
          <label
            className="inputAccommodationFormName"
            htmlFor="tripAccommodation"
          >
            ACCOMMODATION
            <input
              onChange={(e) => {
                setInputTripAccommodation(e.target.value);
              }}
              id="tripAccommodation"
              placeholder="Type your accommodation"
              type="text"
            ></input>
          </label>
          <div className="checkinCheckout">
            <label className="inputAccommodationForm" htmlFor="tripCheckin">
              CHECK-IN
              <input
                onChange={(e) => {
                  setInputCheckinDate(e.target.value);
                }}
                id="tripCheckinDate"
                type="date"
              ></input>
              <input
                className="accommodationTime"
                onChange={(e) => {
                  setInputCheckinTime(e.target.value);
                }}
                id="tripCheckinTime"
                type="time"
              ></input>
            </label>

            <label className="inputAccommodationForm" htmlFor="tripCheckout">
              CHECK-OUT
              <input
                onChange={(e) => {
                  setInputCheckoutDate(e.target.value);
                }}
                id="tripCheckoutDate"
                type="date"
              ></input>
              <input
                className="accommodationTime"
                onChange={(e) => {
                  setInputCheckoutTime(e.target.value);
                }}
                id="tripCheckoutTime"
                type="time"
              ></input>
            </label>
          </div>
        </div>
        <div className="formSightseeing">
          <label className="inputSightseeingForm" htmlFor="sightseeingList">
            <textarea
              onChange={(e) => {
                setInputSightseeing(e.target.value);
              }}
              id="sightseeingList"
              placeholder="Type your travel notes here..."
            ></textarea>
          </label>
        </div>
        <div className="newTripFormFooter">
          <button type="submit" className="createNewTripButton">
            Create
          </button>
          <Link className="cancelNewTrip" to="/myTrips">
            <button className="cancelNewTripButton">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
