const { REACT_APP_OPENWEATHER_KEY } = process.env;

export const getWeather = ({ latitude = 0, longitude = 0 }) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${REACT_APP_OPENWEATHER_KEY}`,
  ).then((response) => response.json());
};
