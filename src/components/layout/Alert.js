import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert, closeAlert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'> {alert.message}</i>
        <div className='close-alert' onClick={closeAlert}>
          <i className='fas fa-times-circle'></i>
        </div>
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.object,
  closeAlert: PropTypes.func,
};

export default Alert;
