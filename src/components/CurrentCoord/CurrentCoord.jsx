import React from "react";

import PropTypes from "prop-types";
import {
  CurrentCoordMainContainer,
  CurrentCoordErrorSvg,
  CurrentCoordErrorItem,
  CurrentCoordErrorItemText,
} from "./CurrentCoord.styled";
import { Spinner } from "react-bootstrap";
import ArrowUpSVG from "../../images/arrow-up-svgrepo-com.svg";

const CurrentCoord = ({ location, error }) => {
  return (
    <CurrentCoordMainContainer>
      {location ? (
        <code>
          Your current position: Latitude: {location.latitude}, Longitude:{" "}
          {location.longitude}
        </code>
      ) : (
        !error && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
      )}
      {error && (
        <CurrentCoordErrorItem>
          <CurrentCoordErrorItemText>
            Location Error: {error}
          </CurrentCoordErrorItemText>
        </CurrentCoordErrorItem>
      )}
      {error && (
        <CurrentCoordErrorItem>
          <CurrentCoordErrorSvg src={ArrowUpSVG}></CurrentCoordErrorSvg>
          <CurrentCoordErrorItemText>
            But you can make a weather request for the city you are interested
            in yourself
          </CurrentCoordErrorItemText>

          <CurrentCoordErrorSvg src={ArrowUpSVG}></CurrentCoordErrorSvg>
        </CurrentCoordErrorItem>
      )}
    </CurrentCoordMainContainer>
  );
};

Location.propTypes = {
  location: PropTypes.object,
  error: PropTypes.string,
};

export default CurrentCoord;
