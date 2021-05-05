import "./styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="homePageHeader">Logo</div>
      <div className="homePageContent">
        <Link className="homeLink1" to="/myTrips">
          <span className="homePageLinksTitles">MY TRAVELS</span>
          <div className="myTravelsHome"></div>
        </Link>
        <Link className="homeLink2" to="/worldMap">
          <span className="homePageLinksTitles">MY TRAVEL MAP</span>
          <div className="earth"></div>
        </Link>
      </div>
    </div>
  );
}
