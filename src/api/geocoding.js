import queryString from 'query-string';

const { REACT_APP_OPENCAGE_KEY } = process.env;

const basePath = 'https://api.opencagedata.com/geocode/v1/json?';

const getCityName = async ({ latitude, longitude }) => {
  const queryCityName = {
    url: basePath,
    query: {
      q: [latitude, longitude],
      key: REACT_APP_OPENCAGE_KEY,
    },
  };
  const queryUrl = queryString.stringifyUrl(queryCityName, {
    sort: false,
    skipNull: true,
    arrayFormat: 'separator',
    arrayFormatSeparator: '+',
  });
  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl}, received ${response.status}`);
  }

  const data = await response.json();
  return data.results[0].components.city;
};

const getCityCoordinates = async (name) => {
  const queryCityCoords = {
    url: basePath,
    query: {
      q: name,
      key: REACT_APP_OPENCAGE_KEY,
    },
  };
  const queryUrl = queryString.stringifyUrl(queryCityCoords, {
    sort: false,
    skipNull: true,
  });
  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl}, received ${response.status}`);
  }

  const data = await response.json();

  const transformData = {
    latitude: data.results[0].geometry.lat,
    longitude: data.results[0].geometry.lng,
  };
  return transformData;
};

export { getCityName, getCityCoordinates };
