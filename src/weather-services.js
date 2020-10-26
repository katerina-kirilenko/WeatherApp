import moment from 'moment';

import openweatherIcon from '@/assets/OpenWeather.png';
import climacell from '@/assets/climacell.png';
import convertDayName from '@/utils/convertDay';

const { REACT_APP_OPENWEATHER_KEY, REACT_APP_CLIMACELL_KEY } = process.env;

const weatherServices = [
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
        feelsLike: Math.round(main.feels_like),
        wind: wind.speed,
        humidity: main.humidity,
      };
    },
    transformForecast: ({ list }) => {
      const mapper = ({ dt, main, weather }) => ({
        day: convertDayName(dt * 1000),
        temp: Math.round(main.temp),
        description: weather[0].description,
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      });
      const forecast = [];
      if (list) {
        for (let i = 0; i < list.length; i += 8) {
          forecast.push(mapper(list[i + 4]));
        }
      }
      return forecast;
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
      startTime: 'start_time',
      endTime: 'end_time',
      parameters: 'fields',
      key: 'apikey',
    },
    baseUrl: 'https://api.climacell.co/v3/weather/',
    weatherPath: 'realtime',
    forecastPath: 'forecast/daily',
    forecastParameters: {
      startTime: 'now',
      endTime: moment().add(5, 'days').format(),
    },
    transformWeatherToday: (data) => {
      return {
        temp: Math.round(data.temp.value),
        description: data.weather_code.value,
        feelsLike: Math.round(data.feels_like.value),
        wind: data.wind_speed.value,
        humidity: data.humidity.value,
      };
    },
    transformForecast: (data) => {
      return data.slice(1).map((item) => {
        return {
          day: convertDayName(new Date(item.observation_time.value).getTime()),
          temp: Math.round((item.temp[0].min.value + item.temp[1].max.value) / 2),
          description: item.weather_code.value,
          icon: '',
        };
      });
    },
  },
];

export default weatherServices;
