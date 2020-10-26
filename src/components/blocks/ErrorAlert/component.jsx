import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ErrorAlert = ({ errorText }) => {
  return (
    <div className="error-alert">
      <span>{errorText}</span>
    </div>
  );
};

ErrorAlert.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export default ErrorAlert;
