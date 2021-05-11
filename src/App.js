import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import EditTrip from "./components/EditTrip";
import MyTrips from "./components/MyTrips";
import NewTrip from "./components/NewTrip";
import Trip from "./components/Trip";
import WorldMap from "./components/WorldMap";
import Logo from "./components/Logo";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header"></header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
              <Logo />
            </Route>
            <Route path="/myTrips/:id/edit">
              <EditTrip />
              <Logo />
            </Route>
            <Route path="/myTrips/:id">
              <Trip />
              <Logo />
            </Route>
            <Route path="/myTrips">
              <MyTrips />
              <Logo />
            </Route>
            <Route path="/newTrip">
              <NewTrip />
              <Logo />
            </Route>
            <Route path="/worldMap">
              <WorldMap />
              <Logo />
            </Route>
            <Route path="*">
              <PageNotFound />
              <Logo />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
