import "./styles/EditTrip.css";
import { useHistory } from "react-router";

export default function EditTrip() {
  const history = useHistory();
  return (
    <div className="EditTrip">
      <h2>Edit Page</h2>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Return
      </button>
    </div>
  );
}
