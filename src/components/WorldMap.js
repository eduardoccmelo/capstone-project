import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

export default function WorldMap() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState(Number(0));
  const [filterName, setFilterName] = useState("");
  const [markers, setMarkers] = useState([]);
  const [viewPort, setViewPort] = useState({
    latitude: 42.4211,
    longitude: 24.345,
    width: "590px",
    height: "450px",
    zoom: 0,
  });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  let textContent;
  if (visitedCountries === 0) {
    textContent = "You didn't select any Country yet";
  } else if (visitedCountries === 1) {
    textContent = `You have visited ${visitedCountries} Country in the World`;
  } else {
    textContent = `You have visited ${visitedCountries} Countries in the World`;
  }

  function handleClick(e, latlng) {
    if (e.target.checked === true) {
      setVisitedCountries(visitedCountries + 1);
      setMarkers([...markers, latlng]);
    } else {
      setVisitedCountries(visitedCountries - 1);
      function filterFunction(country) {
        return country !== latlng;
      }
      const filteredMarkers = markers.filter(filterFunction);
      setMarkers(filteredMarkers);
    }
  }

  function handleOnName(e) {
    console.log(e.target.value);
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name.toLowerCase() === e.target.value.toLowerCase()) {
        console.log(countries[i]);
      }
    }
  }

  return (
    <div className="worldMap">
      <h2>WorldMap</h2>
      <Link to="/">Home</Link>
      <Link to="/myTrips">My Trips</Link>
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiZWR1YXJkb2NjbWVsbyIsImEiOiJja250MThsZ2wwOXA0MnZuM3hvYnhtM2dvIn0.hUiO7xIIMMnn4NNRl1kmPw"
        }
        mapStyle="mapbox://styles/eduardoccmelo/cknt22q320tjn18mug9tx4v89"
        onViewportChange={(viewPort) => {
          setViewPort(viewPort);
        }}
      >
        {markers.length > 0 &&
          markers.map((marker) => {
            return (
              <Marker latitude={marker[0]} longitude={marker[1]}>
                <div>
                  <i className="fas fa-check-circle"></i>
                </div>
              </Marker>
            );
          })}
      </ReactMapGl>

      <div>{textContent}</div>

      <input placeholder="filter" onChange={handleOnName}></input>

      {countries.map((country) => {
        const { name, latlng } = country;
        return (
          <div key={name} className="countryName">
            <input
              onClick={(event) => handleClick(event, latlng)}
              className="checkbox"
              type="checkbox"
              value={name}
            ></input>
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}
