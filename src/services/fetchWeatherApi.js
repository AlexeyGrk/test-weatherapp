import axios from "axios";

export async function getCurrentWeather(current) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${current.latitude}&lon=${current.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`

      //`https://api.openweathermap.org/data/2.5/weather?lat=69.3&lon=139.9&appid=dbee7d5fa08c5b02343c384ae09d6fa7&units=metric`
      // [69.3, 139.9]- deputatsky
      // [17, -4] - mali
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
