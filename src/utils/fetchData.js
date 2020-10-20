import { weatherServices } from '@/weather-services';
const queryString = require('query-string');

async function getWeatherToday({ latitude = 0, longitude = 0, selectedService }) {
  const service = weatherServices.find((service) => service.id === selectedService);
  const { baseUrl, weatherPath, key, unit, parameters, args, transformWeatherToday } = service;

  const queryWeather = {
    url: baseUrl + weatherPath,
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
  return transformWeatherToday(data);
}

export { getWeatherToday };
