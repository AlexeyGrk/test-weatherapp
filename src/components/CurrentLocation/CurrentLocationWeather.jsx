import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import {
  getCurrentWeather,
  getWeatherByCity,
} from "../../services/fetchWeatherApi";
import SearchFormByCity from "../SearchFormByCity/SearchFormByCity";
import TempSVG from "../../images/temperature-svgrepo-com.svg";
import MaxTempSVG from "../../images/thermometer-measuring-ascending-temperature-svgrepo-com.svg";
import MinTempSVG from "../../images/temperature-svgrepo-com-minT.svg";
import HumiditySVG from "../../images/humidity-alt-svgrepo-com.svg";
import {
  CurrentLocationWeatherMainContainer,
  CurrentLocationWeatherDetailsContainer,
  CurrentLocationWeatherDetailsTitle,
  CurrentLocationWeatherDetailsImage,
  CurrentLocationWeatherDetailsMainInformationItem,
  CurrentLocationWeatherDetailsSecondaryInformationItem,
  CurrentLocationWeatherTopContainer,
  CurrentLocationWeatherBottomContainer,
  CurrentLocationWeatherDescription,
  CurrentLocationWeatherDetailsHumidity,
  CurrentLocationWeatherMaxMinTemp,
  CurrentLocationWeatherChangerTemp,
} from "./CurrentLocationWeather.styled";

const CurrentLocation = ({ currentLocation }) => {
  const [geolocationInfo, setGeolocationInfo] = useState("");
  const [currentTempColor, setCurrentTempColor] = useState("");

  function changeTemp(e) {
    e.preventDefault();
    setGeolocationInfo((prev) => ({
      ...prev,
      main: { ...prev.main, temp: e.target.value },
    }));
  }
  const debouncedChangeHandler = useCallback(debounce(changeTemp, 300), []);
  useEffect(() => {
    if (currentLocation) {
      try {
        getCurrentWeather(currentLocation).then((data) => {
          if (geolocationInfo === "") {
            setGeolocationInfo(data);
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    }

    if (geolocationInfo) {
      switch (true) {
        case geolocationInfo.main.temp <= -10:
          setCurrentTempColor("#00ffff");
          break;
        case geolocationInfo.main.temp > -10 && geolocationInfo.main.temp < 30:
          setCurrentTempColor("#fff700");
          break;
        case geolocationInfo.main.temp >= 30:
          setCurrentTempColor("#ff8c00");
          break;

        default:
          setCurrentTempColor("#fff700");
          break;
      }
    }
  }, [currentLocation, geolocationInfo]);
  return (
    <>
      <SearchFormByCity
        setGeolocationInfo={setGeolocationInfo}
      ></SearchFormByCity>
      <CurrentLocationWeatherMainContainer currentTempColor={currentTempColor}>
        {geolocationInfo && (
          <CurrentLocationWeatherDetailsContainer>
            <CurrentLocationWeatherTopContainer>
              <CurrentLocationWeatherDetailsImage
                src={`https://openweathermap.org/img/wn/${geolocationInfo.weather[0].icon}.png`}
                alt="current weather icon"
              />
              <CurrentLocationWeatherDescription>
                {geolocationInfo.weather[0].description}
              </CurrentLocationWeatherDescription>
            </CurrentLocationWeatherTopContainer>
            <CurrentLocationWeatherDetailsTitle>
              {geolocationInfo.name}
            </CurrentLocationWeatherDetailsTitle>
            <CurrentLocationWeatherBottomContainer>
              <CurrentLocationWeatherDetailsMainInformationItem>
                <CurrentLocationWeatherDetailsHumidity src={TempSVG} />
                {Math.round(geolocationInfo.main.temp)} &deg;C
              </CurrentLocationWeatherDetailsMainInformationItem>
              <CurrentLocationWeatherMaxMinTemp>
                <CurrentLocationWeatherDetailsSecondaryInformationItem>
                  <CurrentLocationWeatherDetailsHumidity src={MaxTempSVG} />
                  max: {Math.round(geolocationInfo.main.temp_max)} &deg;C &nbsp;
                </CurrentLocationWeatherDetailsSecondaryInformationItem>

                <CurrentLocationWeatherDetailsSecondaryInformationItem>
                  <CurrentLocationWeatherDetailsHumidity src={MinTempSVG} />
                  min: {Math.round(geolocationInfo.main.temp_min)} &deg;C
                </CurrentLocationWeatherDetailsSecondaryInformationItem>
              </CurrentLocationWeatherMaxMinTemp>

              <CurrentLocationWeatherDetailsMainInformationItem>
                <CurrentLocationWeatherDetailsHumidity src={HumiditySVG} />
                {geolocationInfo.main.humidity}%
              </CurrentLocationWeatherDetailsMainInformationItem>
              {/* <CurrentLocationWeatherDetailsSecondaryInformationItem>
                pressure:{geolocationInfo.main.pressure}
              </CurrentLocationWeatherDetailsSecondaryInformationItem> */}
            </CurrentLocationWeatherBottomContainer>
          </CurrentLocationWeatherDetailsContainer>
        )}
      </CurrentLocationWeatherMainContainer>
      {geolocationInfo && (
        <CurrentLocationWeatherChangerTemp
          id="temperatures-control"
          min="-30"
          max="50"
          type="range"
          step="1"
          onChange={debouncedChangeHandler}
        />
      )}
    </>
  );
};

export default CurrentLocation;
