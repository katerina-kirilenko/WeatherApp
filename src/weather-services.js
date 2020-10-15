import openweatherIcon from '@/assets/OpenWeather.png';
import weatherbitIcon from '@/assets/Weatherbit.png';

const { REACT_APP_OPENWEATHER_KEY, REACT_APP_WEATHERBIT_KEY } = process.env;

export const weatherServices = [
  {
    id: 'openweather',
    key: REACT_APP_OPENWEATHER_KEY,
    ico: openweatherIcon,
    bgColor: '#fffc',
    url: 'https://openweathermap.org/'
  },
  {
    id: 'weatherbit',
    key: REACT_APP_WEATHERBIT_KEY,
    ico: weatherbitIcon,
    bgColor: '#158ddc',
    url: 'https://www.weatherbit.io/'
  },
];
