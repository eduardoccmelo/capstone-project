import { Link } from "react-router-dom";

export default function WorldMap() {
  return (
    <div className="worldMap">
      <h2>WorldMap</h2>
      <Link to="/">Home</Link>
      <Link to="/myTrips">My Trips</Link>
    </div>
  );
}
