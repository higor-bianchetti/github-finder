import React from 'react';

const NotFound = () => {
  return (
    <div className='flex-center'>
      <div className='card p-3'>
        <h1 className='text-center'>Not Found!</h1>
        <p className='my-2 text-center lead'>
          The page you are looking for does not exist...
        </p>
        <div className='text-center my-1'>
          <i className='fab fa-github fa-3x' />
        </div>
        <p className='my-2 text-center'>
          Return to <a href='/'>Home</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
