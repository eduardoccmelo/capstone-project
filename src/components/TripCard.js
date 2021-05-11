import { Link } from "react-router-dom";

export default function TripCard({
  handleRemoveTrip,
  name,
  id,
  transportation,
  startDay,
  startMonth,
  endDay,
  endMonth,
}) {
  return (
    <div key={id} className="myTripsItem">
      <button className="removeButton" onClick={() => handleRemoveTrip(name)}>
        <i className="fas fa-trash-alt"></i>
      </button>
      <div>
        {transportation === "car" && (
          <span className="transportTypeIcon">
            <i className="fas fa-car"></i>
          </span>
        )}
        {transportation === "bus" && (
          <span className="transportTypeIcon">
            <i className="fas fa-bus"></i>
          </span>
        )}
        {transportation === "train" && (
          <span className="transportTypeIcon">
            <i className="fas fa-train"></i>
          </span>
        )}
        {transportation === "plane" && (
          <span className="transportTypeIcon">
            <i className="fas fa-plane"></i>
          </span>
        )}
        {transportation === "other" && (
          <span className="transportTypeIcon">
            <i className="fas fa-suitcase"></i>
          </span>
        )}
        {transportation === "none" && (
          <span className="transportTypeIcon">
            <i className="fas fa-suitcase"></i>
          </span>
        )}
        {transportation === "" && (
          <span className="transportTypeIcon">
            <i className="fas fa-suitcase"></i>
          </span>
        )}
        <span className="tripName">{name}</span>
      </div>
      <hr></hr>
      <div className="tripDates">
        <div className="tripStart">
          {startDay}.{startMonth}
        </div>
        <div className="tripEnd">
          {endDay}.{endMonth}
        </div>
      </div>
      <Link to={`/myTrips/${id}`}>
        <button className="tripViewButton">View</button>
        <div className="barcode">
          <i className="fas fa-barcode"></i>
          <i className="fas fa-barcode"></i>
          <i className="fas fa-barcode"></i>
          <i className="fas fa-barcode"></i>
        </div>
      </Link>
    </div>
  );
}
