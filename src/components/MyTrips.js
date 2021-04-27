import "./styles/MyTrips.css";
import { Link } from "react-router-dom";

export default function MyTrips() {
  return (
    <div className="MyTrips">
      <h2>My Trips</h2>
      <Link to="/myTrips/:id">Trip 1</Link>
      <Link to="/myTrips/:id">Trip 2</Link>
      <Link to="/myTrips/:id">Trip 3</Link>
      <Link to="/myTrips/:id">Trip 4</Link>
      <Link to="/myTrips/:id">Trip 5</Link>
      <Link to="/newTrip">Add a New Trip</Link>
      <Link to="/worldMap">World Map</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
