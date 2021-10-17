import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import useCurrentLocation from "./hooks/useCurrentLocation";
import useWatchLocation from "./hooks/useWatchLocation";
import { geolocationOptions } from "./constants/geolocationOptions";

import { Backdrop } from "./components/Modal";
import { AcceptGeolocationContext } from "./contexts/AcceptGeolocationContext";

import CurrentLocationWeather from "./components/CurrentLocation/CurrentLocationWeather";
import MainContainer from "./components/MainContainer/MainContainer";
import CurrentCoord from "./components/CurrentCoord/CurrentCoord";

function App() {
  const [accept, setAccept] = useState(false);

  const { location: currentLocation, error: currentError } = useCurrentLocation(
    geolocationOptions,
    accept
  );

  // const { location, cancelLocationWatch, error } =
  //   useWatchLocation(geolocationOptions);
  // const [isWatchinForLocation, setIsWatchForLocation] = useState(true);

  // useEffect(() => {
  //   if (!location) return;

  //   // Cancel location watch after 3sec
  //   setTimeout(() => {
  //     cancelLocationWatch();
  //     setIsWatchForLocation(false);
  //   }, 3000);
  // }, [location, cancelLocationWatch]);

  return (
    <AcceptGeolocationContext.Provider value={[accept, setAccept]}>
      <div className="appContainer">
        <MainContainer>
          <Backdrop />

          <CurrentLocationWeather currentLocation={currentLocation} />
          {accept && (
            <CurrentCoord location={currentLocation} error={currentError} />
          )}
          {/* {currentLocation && <CurrentCoord location={currentLocation} />}
          {currentError && <CurrentCoord error={currentError} />}
          <p>Watch position: (Status: {isWatchinForLocation.toString()})</p>
          <CurrentCoord location={location} error={error} /> */}
        </MainContainer>
      </div>
    </AcceptGeolocationContext.Provider>
  );
}

export default App;
