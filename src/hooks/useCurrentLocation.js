import { useState, useEffect } from "react";

const useCurrentLocation = (options = {}, accept) => {
  const [location, setLocation] = useState();

  const [error, setError] = useState();

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!accept) {
      return;
    }
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [accept, options]);

  return { location, error };
};

export default useCurrentLocation;
