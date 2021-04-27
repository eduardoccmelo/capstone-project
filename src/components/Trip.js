import "./styles/Trip.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Trip() {
  const history = useHistory();
  return (
    <div className="TripDetails">
      <h2>Trip Details</h2>
      <Link to="/myTrips/:id/edit">Edit</Link>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}
