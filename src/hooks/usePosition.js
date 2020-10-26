import { useState, useEffect } from 'react';

const usePosition = (watch = false) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords, timestamp }) => {
    const { latitude, longitude, accuracy } = coords;
    setPosition({ latitude, longitude, accuracy, timestamp });
  };

  const onError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = geo.watchPosition(onChange, onError);
    } else {
      geo.getCurrentPosition(onChange, onError);
    }

    // eslint-disable-next-line consistent-return
    return () => geo.clearWatch(watcher);
  }, [watch]);

  return { ...position, error };
};

export default usePosition;
