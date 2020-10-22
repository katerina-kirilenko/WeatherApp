import React from 'react';

import './style.css';

const ErrorAlert = ({ errorText }) => {
  return (
    <div className="error-alert">
      <span>{errorText}</span>
    </div>
  );
};

export default ErrorAlert;
