import "./styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <h2>Home</h2>
      <Link className="homeLinks" to="/myTrips">
        My Trips
      </Link>
      <Link className="homeLinks" to="/worldMap">
        World Map
      </Link>
    </div>
  );
}
