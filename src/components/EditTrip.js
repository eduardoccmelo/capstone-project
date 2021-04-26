import { useHistory } from "react-router";

export default function EditTrip() {
  const history = useHistory();
  return (
    <div className="editTrip">
      <h2>Edit Page</h2>
      <button
        onClick={(e) => {
          history.goBack();
        }}
      >
        Return
      </button>
    </div>
  );
}
