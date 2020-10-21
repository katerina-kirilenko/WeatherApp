import queryString from 'query-string';

import { weatherServices } from '@/weather-services';
import { WEATHER, FORECAST } from '@/constants';

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
    forecastParameters,
    transformWeatherToday,
    transformForecast,
  } = service;

  const path = type === WEATHER ? weatherPath : forecastPath;

  let startTime, endTime;
  if (type === FORECAST && forecastParameters) {
    startTime = forecastParameters.startTime;
    endTime = forecastParameters.endTime;
  }

  const queryWeather = {
    url: baseUrl + path,
    query: {
      [args.lat]: latitude,
      [args.lon]: longitude,
      [args.units]: unit,
      [args.startTime]: startTime,
      [args.endTime]: endTime,
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
  const transformData = type === WEATHER ? transformWeatherToday(data) : transformForecast(data);

  return transformData;
}

export { getWeather };
