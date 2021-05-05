import "./styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="homePageContent">
        <Link className="homeLink1" to="/myTrips">
          <div className="homePageLinksTitles">
            <span className="myTravelsHome"></span>MY TRIPS
          </div>
        </Link>
        <Link className="homeLink2" to="/worldMap">
          <div className="homePageLinksTitles">
            <span className="earth"></span>MY TRAVEL MAP
          </div>
        </Link>
      </div>
    </div>
  );
}
