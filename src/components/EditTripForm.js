import { Link } from "react-router-dom";

export default function EditTripForm({
  handleOnSubmit,
  inputDestinationName,
  setInputDestinationName,
  inputTripStart,
  setInputTripStart,
  inputTripEnd,
  setInputTripEnd,
  setInputTransportType,
  setInputTripDeparture,
  setInputTripArrival,
  setInputTripAccommodation,
  inputCheckinDate,
  setInputCheckinDate,
  setInputCheckinTime,
  inputCheckoutDate,
  setInputCheckoutDate,
  setInputCheckoutTime,
  setInputSightseeing,
  inputTransportType,
  inputTripDeparture,
  inputTripArrival,
  inputTripAccommodation,
  inputCheckinTime,
  inputCheckoutTime,
  inputSightseeing,
}) {
  return (
    <form className="EditTripForm" onSubmit={handleOnSubmit}>
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
            value={inputTripStart}
            id="tripStart"
            type="date"
            max={inputTripEnd}
            required
          ></input>
        </label>

        <label className="tripEndForm" htmlFor="tripEnd">
          END
          <input
            onChange={(e) => {
              setInputTripEnd(e.target.value);
            }}
            value={inputTripEnd}
            id="tripEnd"
            type="date"
            min={inputTripStart}
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
            value={inputTransportType}
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
              value={inputTripDeparture}
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
              value={inputTripArrival}
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
            value={inputTripAccommodation}
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
              value={inputCheckinDate}
              id="tripCheckinDate"
              type="date"
              max={inputCheckoutDate}
            ></input>
            <input
              className="accommodationTime"
              onChange={(e) => {
                setInputCheckinTime(e.target.value);
              }}
              value={inputCheckinTime}
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
              value={inputCheckoutDate}
              id="tripCheckoutDate"
              type="date"
              min={inputCheckinDate}
            ></input>
            <input
              className="accommodationTime"
              onChange={(e) => {
                setInputCheckoutTime(e.target.value);
              }}
              value={inputCheckoutTime}
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
            value={inputSightseeing}
            id="sightseeingList"
            placeholder="Type your travel notes here..."
          ></textarea>
        </label>
      </div>
      <div className="editTripFooter">
        <button className="editFromTripButton" type="submit">
          Confirm
        </button>
        <Link className="cancelTrip" to="/myTrips">
          <button className="editTripCancelButton">Cancel</button>
        </Link>
      </div>
    </form>
  );
}
