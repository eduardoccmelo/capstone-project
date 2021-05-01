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
      id: `${inputDestinationName}${inputTripStart}${inputTripEnd}`,
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
    alert(`Trip to ${inputDestinationName} created!`);
    history.push("/myTrips");
  }

  return (
    <div className="NewTripForm">
      <h2>New Trip</h2>
      <form className="NewTripForm" onSubmit={handleOnSubmit}>
        <div className="formHeader">
          <label htmlFor="tripName">
            Destination Name:
            <input
              onChange={(e) => {
                setInputDestinationName(e.target.value);
              }}
              value={inputDestinationName}
              id="tripName"
              type="text"
              required
            ></input>
          </label>
        </div>
        <div className="formTravelDates">
          <label htmlFor="tripStart">
            Start:
            <input
              onChange={(e) => {
                setInputTripStart(e.target.value);
              }}
              id="tripStart"
              type="date"
              required
            ></input>
          </label>

          <label htmlFor="tripEnd">
            End:
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
          <label htmlFor="tripTransportType">
            Transport:
            <select
              onChange={(e) => {
                setInputTransportType(e.target.value);
              }}
              id="tripTransportType"
            >
              <option value="none">----</option>
              <option value="bus">Bus</option>
              <option value="car">Car</option>
              <option value="plane">Plane</option>
              <option value="train">Train</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label htmlFor="tripDeparture">
            Departuring Time:
            <input
              onChange={(e) => {
                setInputTripDeparture(e.target.value);
              }}
              id="tripDeparture"
              type="time"
            ></input>
          </label>

          <label htmlFor="tripArrival">
            Arriving Time:
            <input
              onChange={(e) => {
                setInputTripArrival(e.target.value);
              }}
              id="tripArrival"
              type="time"
            ></input>
          </label>
        </div>
        <div className="formAccommodation">
          <label htmlFor="tripAccommodation">
            Accommodation:
            <input
              onChange={(e) => {
                setInputTripAccommodation(e.target.value);
              }}
              id="tripAccommodation"
              type="text"
            ></input>
          </label>

          <label htmlFor="tripCheckin">
            Check-in:
            <input
              onChange={(e) => {
                setInputCheckinDate(e.target.value);
              }}
              id="tripCheckinDate"
              type="date"
            ></input>
            <input
              onChange={(e) => {
                setInputCheckinTime(e.target.value);
              }}
              id="tripCheckinTime"
              type="time"
            ></input>
          </label>

          <label htmlFor="tripCheckout">
            Check-out:
            <input
              onChange={(e) => {
                setInputCheckoutDate(e.target.value);
              }}
              id="tripCheckoutDate"
              type="date"
            ></input>
            <input
              onChange={(e) => {
                setInputCheckoutTime(e.target.value);
              }}
              id="tripCheckoutTime"
              type="time"
            ></input>
          </label>
        </div>
        <div className="formSightseeing">
          <label htmlFor="sightseeingList">
            Sightseeing:
            <textarea
              onChange={(e) => {
                setInputSightseeing(e.target.value);
              }}
              id="sightseeingList"
            ></textarea>
          </label>
        </div>
        <button>Create</button>
      </form>
      <Link to="/myTrips">Cancel</Link>
    </div>
  );
}
