import PropTypes from "prop-types";
import { getWeatherByCity } from "../../services/fetchWeatherApi";
import { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

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
          setSearchError(true); // обработать ошибку для корректного ввода города
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
        {/* 
        <input
          className="SearchFormWeatherByCity-input"
          type="text"
          autoComplete="off"
          placeholder="Search weather"
          name="inputValue"
        />
        <button type="submit">Find</button> */}
      </form>

      {searchError && <h1>Not found </h1>}
    </>
    //создать тег ошибки и красиво нарисовать
  );
};

SearchFormByCity.propTypes = {};

export default SearchFormByCity;
