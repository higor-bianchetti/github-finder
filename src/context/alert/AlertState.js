import React, { useReducer } from 'react';

import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initalState = null;

  const [state, dispatch] = useReducer(AlertReducer, initalState);

  const showAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });
  };

  const closeAlert = () => {
    dispatch({ type: REMOVE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
        closeAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
