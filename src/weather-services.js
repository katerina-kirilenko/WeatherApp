import openweatherIcon from '@/assets/OpenWeather.png';
import climacell from '@/assets/climacell.png';

const { REACT_APP_OPENWEATHER_KEY, REACT_APP_CLIMACELL_KEY } = process.env;

export const weatherServices = [
  {
    id: 'openweather',
    key: REACT_APP_OPENWEATHER_KEY,
    ico: openweatherIcon,
    bgColor: '#fffc',
    unit: 'metric',
    args: {
      lat: 'lat',
      lon: 'lon',
      units: 'units',
      key: 'appid',
    },
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
    weatherPath: 'weather',
    forecastPath: 'forecast',
    transformWeatherToday: ({ name, main, weather, wind }) => {
      return {
        city: name,
        temp: Math.round(main.temp),
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        description: weather[0].description,
        feels_like: Math.round(main.feels_like),
        wind: wind.speed,
        humidity: main.humidity,
      };
    },
  },
  {
    id: 'climacell',
    key: REACT_APP_CLIMACELL_KEY,
    ico: climacell,
    bgColor: '#fff',
    unit: 'si',
    parameters: ['temp', 'feels_like', 'wind_speed', 'humidity', 'weather_code'],
    args: {
      lat: 'lat',
      lon: 'lon',
      units: 'unit_system',
      parameters: 'fields',
      key: 'apikey',
    },
    baseUrl: 'https://api.climacell.co/v3/weather/',
    weatherPath: 'realtime',
    forecastPath: 'forecast/daily',
    transformWeatherToday: ({ temp, weather_code, feels_like, wind_speed, humidity }) => {
      return {
        temp: Math.round(temp.value),
        description: weather_code.value,
        feels_like: Math.round(feels_like.value),
        wind: wind_speed.value,
        humidity: humidity.value,
      };
    },
  },
];
