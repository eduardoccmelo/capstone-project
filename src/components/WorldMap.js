import "./styles/WorldMap.css";
import { Link } from "react-router-dom";

export default function WorldMap() {
  return (
    <div className="WorldMap">
      <h2>WorldMap</h2>
      <Link to="/">Home</Link>
      <Link to="/myTrips">My Trips</Link>
    </div>
  );
}
