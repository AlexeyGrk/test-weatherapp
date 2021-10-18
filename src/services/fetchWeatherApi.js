import axios from "axios";

export async function getCurrentWeather(current) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${current.latitude}&lon=${current.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getWeatherByCity(cityName) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
