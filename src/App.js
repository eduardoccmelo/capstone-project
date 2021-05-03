import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import EditTrip from "./components/EditTrip";
import MyTrips from "./components/MyTrips";
import NewTrip from "./components/NewTrip";
import Trip from "./components/Trip";
import WorldMap from "./components/WorldMap";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">LOGO</header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home className="firstPage" />
            </Route>
            <Route path="/myTrips/:id/edit">
              <EditTrip />
            </Route>
            <Route path="/myTrips/:id">
              <Trip />
            </Route>
            <Route path="/myTrips">
              <MyTrips />
            </Route>
            <Route path="/newTrip">
              <NewTrip />
            </Route>
            <Route path="/worldMap">
              <WorldMap />
            </Route>
            <Route path="*">
              <p>Page Not Found</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
