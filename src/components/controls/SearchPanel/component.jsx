import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCity } from '@/selectors';
import { handleWeatherRequests, setCity } from '@/actions';

import './style.css';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [city, setCityLocal] = useState('');
  const name = useSelector(getCity);

  useEffect(() => {
    setCityLocal(name);
  }, [name]);

  const handleSearch = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(setCity(city));
      dispatch(handleWeatherRequests());
    },
    [city, dispatch],
  );

  const handleChangeSearch = useCallback((event) => {
    setCityLocal(event.target.value);
  }, []);

  return (
    <form id="search-form" className="search-block" onSubmit={handleSearch}>
      <input
        className="search-input"
        type="search"
        name="search-city"
        placeholder="Search any city"
        value={city}
        onChange={handleChangeSearch}
      />
      <button className="button search-btn" id="search" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchPanel;
