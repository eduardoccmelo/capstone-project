import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function NewTrip() {
  const history = useHistory();
  return (
    <div className="newTrip">
      <h2>New Trip</h2>
      <form className="newTripForm">
        <textarea></textarea>
        <button
          type="submit"
          onClick={(e) => {
            alert("Trip Created!");
          }}
        >
          Submit
        </button>
      </form>
      <Link to="/myTrips">Cancel</Link>
    </div>
  );
}
