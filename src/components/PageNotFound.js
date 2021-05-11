import "./styles/PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <p className="pageNotFound">Page Not Found</p>
      <Link to="">
        <button className="pageNotFoundButtonHome ">
          <i className="fas fa-home"></i>
        </button>
      </Link>
    </div>
  );
}
