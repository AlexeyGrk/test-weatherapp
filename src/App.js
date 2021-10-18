import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import useCurrentLocation from "./hooks/useCurrentLocation";

import { geolocationOptions } from "./constants/geolocationOptions";

import { Backdrop } from "./components/Modal/Modal";
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

  return (
    <AcceptGeolocationContext.Provider value={[accept, setAccept]}>
      <div className="appContainer">
        <MainContainer>
          <Backdrop />

          <CurrentLocationWeather currentLocation={currentLocation} />
          {accept && (
            <CurrentCoord location={currentLocation} error={currentError} />
          )}
        </MainContainer>
      </div>
    </AcceptGeolocationContext.Provider>
  );
}

export default App;
