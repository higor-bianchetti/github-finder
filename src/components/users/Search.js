import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, setAlert, searchUsers }) => {
  const [user, setUser] = useState(''); // '' -> Default Value

  const onSubmit = (event) => {
    event.preventDefault();
    if (user === '') {
      setAlert('Please enter something to search for', 'danger');
    } else {
      searchUsers(user);
      setUser('');
    }
  };

  const onChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='user'
          placeholder='Search Users...'
          value={user}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-primary btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-secondary btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
