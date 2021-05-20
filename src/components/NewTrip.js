import { useHistory } from "react-router";
import { useState } from "react";
import { addTripToLocalStorage } from "../services/myTripsStorage";
import Form from "./Form";
import "./styles/Form.css";

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
  const [allSightseeings, setAllSightseeings] = useState([]);
  const [currency, setCurrency] = useState("€");
  const [inputExpenseName, setInputExpenseName] = useState("");
  const [inputExpenseValue, setInputExpenseValue] = useState("");
  const [allExpenses, setAllExpenses] = useState([]);
  const [inputNotes, setInputNotes] = useState("");
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
      sightseeings: allSightseeings,
      expenses: allExpenses,
      notes: inputNotes,
    });
    history.push("/myTrips");
  }

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
  function handleExpenseOnClick(e) {
    e.preventDefault();
    if (inputExpenseName !== "") {
      setAllExpenses([
        ...allExpenses,
        {
          name: inputExpenseName,
          value: Number(inputExpenseValue),
          currency: currency,
        },
      ]);
    }
    setInputExpenseName("");
    setInputExpenseValue(0);
  }

  return (
    <div className="NewTrip">
      <div className="newTripHeader">
        <h2>NEW TRIP</h2>
      </div>
      <Form
        handleOnSubmit={handleOnSubmit}
        handleSightseeingOnClick={handleSightseeingOnClick}
        handleExpenseOnClick={handleExpenseOnClick}
        inputDestinationName={inputDestinationName}
        setInputDestinationName={setInputDestinationName}
        inputTripStart={inputTripStart}
        setInputTripStart={setInputTripStart}
        inputTripEnd={inputTripEnd}
        setInputTripEnd={setInputTripEnd}
        inputTransportType={inputTransportType}
        setInputTransportType={setInputTransportType}
        inputTripDeparture={inputTripDeparture}
        setInputTripDeparture={setInputTripDeparture}
        inputTripArrival={inputTripArrival}
        setInputTripArrival={setInputTripArrival}
        inputTripAccommodation={inputTripAccommodation}
        setInputTripAccommodation={setInputTripAccommodation}
        inputCheckinDate={inputCheckinDate}
        setInputCheckinDate={setInputCheckinDate}
        inputCheckinTime={inputCheckinTime}
        setInputCheckinTime={setInputCheckinTime}
        inputCheckoutDate={inputCheckoutDate}
        setInputCheckoutDate={setInputCheckoutDate}
        inputCheckoutTime={inputCheckoutTime}
        setInputCheckoutTime={setInputCheckoutTime}
        inputSightseeing={inputSightseeing}
        setInputSightseeing={setInputSightseeing}
        allSightseeings={allSightseeings}
        setAllSightseeings={setAllSightseeings}
        allExpenses={allExpenses}
        setAllExpenses={setAllExpenses}
        inputExpenseName={inputExpenseName}
        setInputExpenseName={setInputExpenseName}
        inputExpenseValue={inputExpenseValue}
        setInputExpenseValue={setInputExpenseValue}
        currency={currency}
        setCurrency={setCurrency}
        inputNotes={inputNotes}
        setInputNotes={setInputNotes}
      />
    </div>
  );
}
