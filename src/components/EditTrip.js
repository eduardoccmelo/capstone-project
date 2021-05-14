import "./styles/EditTrip.css";
import { useHistory, useParams } from "react-router";
import {
  getSingleTripFromLocalStorage,
  editSingleTripFromLocalStorage,
} from "../services/myTripsStorage";
import { useState, useEffect } from "react";
import EditTripForm from "./EditTripForm";

export default function EditTrip() {
  const history = useHistory();
  const { id } = useParams();

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
  const [allSightseeings, setAllSightseeings] = useState([]);
  const [inputNotes, setInputNotes] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    editSingleTripFromLocalStorage(id, {
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
      sightseeings: allSightseeings,
      notes: inputNotes,
    });
    history.push(`/myTrips/${id}`);
  }

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setInputDestinationName(myTrip.name);
    setInputTripStart(myTrip.start);
    setInputTripEnd(myTrip.end);
    setInputTransportType(myTrip.transportation);
    setInputTripDeparture(myTrip.departure);
    setInputTripArrival(myTrip.arrival);
    setInputTripAccommodation(myTrip.accommodation);
    setInputCheckinDate(myTrip.checkinDate);
    setInputCheckinTime(myTrip.checkinTime);
    setInputCheckoutDate(myTrip.checkoutDate);
    setInputCheckoutTime(myTrip.checkinTime);
    setAllSightseeings(myTrip.sightseeings);
    setInputNotes(myTrip.notes);
  }, [id]);

  function handleSightseeingOnClick(e) {
    e.preventDefault();
    if (inputSightseeing !== "") {
      setAllSightseeings([
        ...allSightseeings,
        { sightseeing: inputSightseeing },
      ]);
    }
    setInputSightseeing("");
  }

  return (
    <div className="EditTrip">
      <div className="editTripHeader">
        <h2>EDIT TRIP</h2>
      </div>
      <EditTripForm
        handleOnSubmit={handleOnSubmit}
        inputDestinationName={inputDestinationName}
        setInputDestinationName={setInputDestinationName}
        inputTripStart={inputTripStart}
        setInputTripStart={setInputTripStart}
        inputTripEnd={inputTripEnd}
        setInputTripEnd={setInputTripEnd}
        setInputTransportType={setInputTransportType}
        setInputTripDeparture={setInputTripDeparture}
        setInputTripArrival={setInputTripArrival}
        setInputTripAccommodation={setInputTripAccommodation}
        inputCheckinDate={inputCheckinDate}
        setInputCheckinDate={setInputCheckinDate}
        setInputCheckinTime={setInputCheckinTime}
        inputCheckoutDate={inputCheckoutDate}
        setInputCheckoutDate={setInputCheckoutDate}
        setInputCheckoutTime={setInputCheckoutTime}
        setInputNotes={setInputNotes}
        inputTransportType={inputTransportType}
        inputTripDeparture={inputTripDeparture}
        inputTripArrival={inputTripArrival}
        inputTripAccommodation={inputTripAccommodation}
        inputCheckinTime={inputCheckinTime}
        inputCheckoutTime={inputCheckoutTime}
        inputSightseeing={inputSightseeing}
        setInputSightseeing={setInputSightseeing}
        allSightseeings={allSightseeings}
        setAllSightseeings={setAllSightseeings}
        inputNotes={inputNotes}
        handleSightseeingOnClick={handleSightseeingOnClick}
      />
    </div>
  );
}
