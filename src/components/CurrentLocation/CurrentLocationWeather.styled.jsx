import styled from "@emotion/styled/macro";

import { css } from "@emotion/react";

const dynamicStyle = ({ currentTempColor }) =>
  css`
    background-color: ${currentTempColor};
  `;

export const CurrentLocationWeatherMainContainer = styled.div`
  ${dynamicStyle}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: cursive;
  max-width: 300px;
  border-radius: 1rem;
  border-color: rgba(238, 237, 237, 0.22);
  box-shadow: 5px 6px 6px 2px #e9ecef;
`;
export const CurrentLocationWeatherTopContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;
export const CurrentLocationWeatherBottomContainer = styled.div`
  padding: 10px;
`;
export const CurrentLocationWeatherMaxMinTemp = styled.div`
  display: flex;
  border-block: 1px solid black;
`;
export const CurrentLocationWeatherDetailsContainer = styled.div`
  padding: 25px;
`;
export const CurrentLocationWeatherDetailsTitle = styled.h2`
  font-size: 2.2rem;
  text-transform: capitalize;
`;
export const CurrentLocationWeatherDetailsImage = styled.img`
  width: 100%;
`;
export const CurrentLocationWeatherDetailsHumidity = styled.img`
  width: 20px;
`;
export const CurrentLocationWeatherDetailsTempImg = styled.img`
  width: 20px;
`;
export const CurrentLocationWeatherDetailsMainInformationItem = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin: 0;
`;
export const CurrentLocationWeatherDescription = styled.p`
  font-family: cursive;
  font-size: 1.2rem;
  width: 150px;
  text-align: right;
`;
export const CurrentLocationWeatherDetailsSecondaryInformationItem = styled.p`
  width: 120px;
  font-size: 18px;
  margin: 5px 0;
`;
export const CurrentLocationWeatherChangerTemp = styled.input`
  position: absolute;
  right: 45%;
  bottom: 5%;
`;
