import React from 'react';

const About = () => {
  return (
    <div className='flex-center'>
      <div className='card p-3'>
        <h1>About this App</h1>
        <p className='my-2 text-center'>App to search Github users</p>
        <p className='my-2 text-center'>Version: 1.0.0</p>
        <div className='text-center my-1'>
          <i className='fab fa-github fa-3x' />
        </div>
        <div className='text-center mt-2'>
          <small>
            Develop with <i className='fas fa-heart text-danger'></i> by{' '}
            <a
              href='https://github.com/higor-bianchetti'
              target='_blank'
              rel='noopener noreferrer'>
              Higor Bianchetti
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default About;
