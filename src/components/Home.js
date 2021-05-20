import "./styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="Home">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="homePageContent"
      >
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
      </motion.div>
    </div>
  );
}
