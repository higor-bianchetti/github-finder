import React, { useContext } from 'react';

import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert, closeAlert } = alertContext;

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

export default Alert;
