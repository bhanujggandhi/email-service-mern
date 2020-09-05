import React from 'react';

import '../styles/WithSpinner.scss';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ auth, ...otherProps }) => {
    return auth === null ? (
      <div className='spinner-overlay'>
        <div className='spinner-container'></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
