import { weatherServices } from '@/weather-services';
import { WEATHER } from '@/constants';

const queryString = require('query-string');

async function getWeather({ latitude = 0, longitude = 0, selectedService }, type) {
  const service = weatherServices.find((service) => service.id === selectedService);
  const {
    baseUrl,
    weatherPath,
    forecastPath,
    key,
    unit,
    parameters,
    args,
    transformWeatherToday,
    transformForecast,
  } = service;

  const path = type === WEATHER ? weatherPath : forecastPath;
  const queryWeather = {
    url: baseUrl + path,
    query: {
      [args.lat]: latitude,
      [args.lon]: longitude,
      [args.units]: unit,
      [args.parameters]: parameters,
      [args.key]: key,
    },
  };

  const queryUrl = queryString.stringifyUrl(queryWeather, {
    sort: false,
    skipNull: true,
    arrayFormat: 'comma',
  });

  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl},
    received ${response.status}`);
  }
  const data = await response.json();

  const transformData =
    type === WEATHER ? transformWeatherToday(data) : transformForecast(data.list);

  return transformData;
}

export { getWeather };
