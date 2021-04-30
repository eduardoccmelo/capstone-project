import "./styles/WorldMap.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMapGl, {
  Marker,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  addMarkerToLocalStorage,
  getMarkersFromLocalStorage,
} from "../services/myMarkersStorage";
import {
  addCountryCountToLocalStorage,
  removeCountryCountFromLocalStorage,
  getCountriesCountFromLocalStorage,
} from "../services/countriesCountStorage";

export default function WorldMap() {
  const [countries, setCountries] = useState([]);
  const [numberOfVisitedCountries, setNumberOfVisitedCountries] = useState(0);
  const [filterInputValue, setFilterInputValue] = useState("");
  const [markers, setMarkers] = useState([]);
  const [viewPort, setViewPort] = useState({
    latitude: 42.123,
    longitude: 10.123,
    width: "375px",
    height: "370px",
    zoom: 0,
  });

  const geolocateStyle = {
    float: "left",
    margin: "10px",
    padding: "10px",
  };

  const navControlStyle = {
    right: 10,
    top: 10,
  };

  const filteredCountries =
    countries.length > 0 &&
    countries.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(filterInputValue.toLowerCase());
    });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    const myMarkers = getMarkersFromLocalStorage();
    setMarkers(myMarkers);
    setNumberOfVisitedCountries(getCountriesCountFromLocalStorage());
  }, []);

  function handleClick(e, latlng, name) {
    if (e.target.checked === true) {
      setNumberOfVisitedCountries(numberOfVisitedCountries + 1);
      setMarkers([...markers, { latlng, name }]);
      addMarkerToLocalStorage({ latlng, name });
      addCountryCountToLocalStorage();
    } else {
      setNumberOfVisitedCountries(numberOfVisitedCountries - 1);
      const filterFunction = (country) => country.name !== name;
      const filteredMarkers = markers.filter(filterFunction);
      setMarkers(filteredMarkers);
      removeMarkerFromLocalStorage(name);
      removeCountryCountFromLocalStorage();
    }
  }

  let textContent;
  if (numberOfVisitedCountries === 0) {
    textContent = "You didn't select any Country yet";
  } else if (numberOfVisitedCountries === 1) {
    textContent = `You have visited ${getCountriesCountFromLocalStorage()} Country in the World`;
  } else {
    textContent = `You have visited ${getCountriesCountFromLocalStorage()} Countries in the World`;
  }

  function handleOnName(e) {
    setFilterInputValue(e.target.value);
  }

  function getCheckboxState(name) {
    const isChecked = markers.some((marker) => {
      return marker.name === name;
    });
    return isChecked;
  }

  function removeMarkerFromLocalStorage(tripName) {
    const myMarkers = getMarkersFromLocalStorage();
    const newMarkers = myMarkers.filter((marker) => {
      return marker.name !== tripName;
    });
    localStorage.setItem("markerData", JSON.stringify(newMarkers));
  }

  return (
    <div className="WorldMap">
      <h2>WorldMap</h2>
      <Link to="/">Home</Link>
      <Link to="/myTrips">My Trips</Link>
      <div>{textContent}</div>
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        mapStyle="mapbox://styles/eduardoccmelo/cknt22q320tjn18mug9tx4v89"
        onViewportChange={(viewPort) => {
          setViewPort(viewPort);
        }}
      >
        {markers.length > 0 &&
          markers.map((marker) => {
            return (
              <Marker
                key={marker.name}
                latitude={marker.latlng[0]}
                longitude={marker.latlng[1]}
              >
                <div>
                  <i
                    onClick={() => {
                      alert(marker.name);
                    }}
                    className="fas fa-map-marker-alt"
                  ></i>
                </div>
              </Marker>
            );
          })}
        <NavigationControl style={navControlStyle} />
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGl>

      <label htmlFor="filterInput">Country Name:</label>
      <input
        placeholder="Type the name of the country"
        className="filterInput"
        value={filterInputValue}
        id="filterInput"
        onChange={handleOnName}
      ></input>
      {filteredCountries.length === 0 && <div>No results</div>}

      {filteredCountries &&
        filteredCountries.map((country) => {
          const { name, latlng } = country;
          return (
            <div key={name} className="countryName">
              <input
                onChange={(e) => handleClick(e, latlng, name)}
                className="checkbox"
                type="checkbox"
                value={name}
                checked={getCheckboxState(name)}
              ></input>

              <span>{name}</span>
            </div>
          );
        })}
    </div>
  );
}
