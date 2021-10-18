import PropTypes from "prop-types";
import { getWeatherByCity } from "../../services/fetchWeatherApi";
import { useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import {
  SearchFormByCityNotFoundMessageImg,
  SearchFormByCityNotFoundMessageContainer,
  SearchFormByCityNotFoundMessageTitle,
} from "./SearchFormByCity.styles";
import NotFoundLocation from "../../images/location-not-found-svgrepo-com.svg";

const SearchFormByCity = ({ setGeolocationInfo }) => {
  const [searchInputValueByCity, setSearchInputValueByCity] = useState("");
  const [searchError, setSearchError] = useState(false);
  const handleInputValue = (e) => {
    e.preventDefault();
    setSearchError(false);
    setSearchInputValueByCity(e.target.elements.inputValue.value);
  };
  useEffect(() => {
    if (searchInputValueByCity === "") {
      return;
    }
    try {
      getWeatherByCity(searchInputValueByCity).then((res) => {
        if (!res) {
          setSearchError(true);
        }
        setGeolocationInfo(res);
      });
    } catch (error) {
      throw Error("Hello");
    }
  }, [searchInputValueByCity, setGeolocationInfo]);
  return (
    <>
      <form onSubmit={handleInputValue}>
        <InputGroup className="mb-3">
          <FormControl
            className="SearchFormWeatherByCity-input"
            type="text"
            placeholder="Enter a city to search the weather"
            aria-label="Search weather"
            autoComplete="off"
            aria-describedby="basic-addon2"
            name="inputValue"
          />
          <Button variant="outline-secondary" type="submit" id="button-addon2">
            Find
          </Button>
        </InputGroup>
      </form>

      {searchError && (
        <SearchFormByCityNotFoundMessageContainer>
          <SearchFormByCityNotFoundMessageTitle>
            Not found, enter the correct city / area name
          </SearchFormByCityNotFoundMessageTitle>
          <SearchFormByCityNotFoundMessageImg src={NotFoundLocation} />
        </SearchFormByCityNotFoundMessageContainer>
      )}
    </>
  );
};

SearchFormByCity.propTypes = {
  setGeolocationInfo: PropTypes.func,
};

export default SearchFormByCity;
