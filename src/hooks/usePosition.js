import { useState, useEffect } from 'react';

export const usePosition = (watch = false) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords, timestamp }) => {
    const { latitude, longitude, accuracy } = coords;
    setPosition({ latitude, longitude, accuracy, timestamp });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = navigator.geolocation.watchPosition(onChange, onError);
    } else {
      navigator.geolocation.getCurrentPosition(onChange, onError);
    }

    return () => watcher && navigator.geolocation.clearWatch(watcher);
  }, [watch]);

  return { ...position, error };
};
