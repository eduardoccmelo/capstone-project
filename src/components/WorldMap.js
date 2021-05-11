import "./styles/WorldMap.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ReactMapGl, {
  Marker,
  Popup,
  NavigationControl,
  FlyToInterpolator,
} from "react-map-gl";
import useSupercluster from "use-supercluster";
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
  const [clickedCountry, setClickedCountry] = useState(null);
  const mapRef = useRef();
  const percentage = (markers.length / 249) * 100;

  let screenWidth = document.body.offsetWidth;
  let mapZoom;
  if (document.body.offsetWidth < 700) {
    mapZoom = 0;
  } else {
    mapZoom = 1;
  }

  const [viewPort, setViewPort] = useState({
    latitude: 24.123,
    longitude: 19.123,
    width: `${screenWidth - 30}px`,
    height: "250px",
    zoom: Number(mapZoom),
  });

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
        data.splice(33, 1);
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    const myMarkers = getMarkersFromLocalStorage();
    setMarkers(myMarkers);
    setNumberOfVisitedCountries(getCountriesCountFromLocalStorage());
  }, []);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setClickedCountry(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
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
  if (numberOfVisitedCountries === 0 || numberOfVisitedCountries.length === 0) {
    textContent = "You didn't select any Country yet";
  } else if (numberOfVisitedCountries === 1) {
    textContent = `You have visited ${getCountriesCountFromLocalStorage()} Country in the World (${Math.round(
      percentage
    )}%)`;
  } else {
    textContent = `You have visited ${getCountriesCountFromLocalStorage()} Countries in the World (${Math.round(
      percentage
    )}%)`;
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

  const points = markers.map((marker) => ({
    type: "Feature",
    properties: {
      cluster: false,
      markerId: marker.name,
    },
    geometry: {
      type: "Point",
      coordinates: [parseFloat(marker.latlng[1]), parseFloat(marker.latlng[0])],
    },
  }));

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewPort.zoom,
    options: { radius: 40, maxZoom: 7 },
  });

  return (
    <div className="TravelMap" id="top">
      <div className="travelMapHeader">
        <h2>TRAVEL MAP</h2>
      </div>

      <div className="visitedCountriesCounter">{textContent}</div>
      <div className="mapboxMap">
        <ReactMapGl
          {...viewPort}
          maxZoom={7}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
          mapStyle="mapbox://styles/eduardoccmelo/cknt22q320tjn18mug9tx4v89"
          onViewportChange={(viewPort) => {
            setViewPort(viewPort);
          }}
          ref={mapRef}
        >
          {markers.length > 0 &&
            clusters.map((cluster) => {
              const [longitude, latitude] = cluster.geometry.coordinates;
              const {
                cluster: isCluster,
                point_count: pointCount,
              } = cluster.properties;
              if (isCluster) {
                return (
                  <Marker
                    key={cluster.id}
                    latitude={latitude}
                    longitude={longitude}
                  >
                    <div
                      className="clusterMarker"
                      style={{
                        width: `${10 + (pointCount / points.length) * 50}px`,
                        height: `${10 + (pointCount / points.length) * 50}px`,
                      }}
                      onClick={() => {
                        const expansionZoom = Math.min(
                          supercluster.getClusterExpansionZoom(cluster.id),
                          20
                        );
                        setViewPort({
                          ...viewPort,
                          latitude,
                          longitude,
                          zoom: expansionZoom,
                          transitionInterpolator: new FlyToInterpolator({
                            speed: 2,
                          }),
                          transitionDuration: "auto",
                        });
                      }}
                    >
                      {pointCount}
                    </div>
                  </Marker>
                );
              }

              return (
                <Marker
                  key={cluster.properties.markerId}
                  latitude={latitude}
                  longitude={longitude}
                  offsetLeft={-10}
                  offsetTop={-12}
                >
                  <div
                    onClick={(e) => {
                      setClickedCountry(cluster);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                  </div>
                </Marker>
              );
            })}
          {clickedCountry && (
            <Popup
              latitude={clickedCountry.geometry.coordinates[1]}
              longitude={clickedCountry.geometry.coordinates[0]}
              onClose={() => {
                setClickedCountry(null);
              }}
            >
              <div>
                <h3>{clickedCountry.properties.markerId}</h3>
              </div>
            </Popup>
          )}
          <NavigationControl style={navControlStyle} />
        </ReactMapGl>
      </div>
      <div className="countryFilter">
        <label htmlFor="filterInput">COUNTRY NAME</label>
        <input
          placeholder="Find a country..."
          className="filterInput"
          value={filterInputValue}
          id="filterInput"
          onChange={handleOnName}
        ></input>
      </div>

      {filteredCountries.length === 0 && (
        <div className="noResults">
          <i className="fas fa-exclamation-circle"></i>NO RESULTS
        </div>
      )}

      {filteredCountries &&
        filteredCountries.map((country) => {
          const { name, latlng, flag } = country;
          return (
            <div key={name} className="countryName">
              <input
                onChange={(e) => handleClick(e, latlng, name)}
                className="checkbox"
                type="checkbox"
                value={name}
                checked={getCheckboxState(name)}
              ></input>

              <span>
                <img className="countryFlag" alt={flag} src={flag}></img>
                {name}
              </span>
            </div>
          );
        })}
      <div className="travelMapFooter">
        <a href="#top" className="backToTopLink">
          <div className="backToTopButton">
            <i className="fas fa-arrow-up"></i>
          </div>
        </a>
        <Link className="myTripsButtonLink" to="">
          <button className="travelMapButtonHome">
            <i className="fas fa-home"></i>
          </button>
        </Link>
        <Link className="myTripsButtonLink" to="/myTrips">
          <button className="myTripsButton">
            <i className="fas fa-suitcase-rolling"></i>My Trips
          </button>
        </Link>
      </div>
    </div>
  );
}
