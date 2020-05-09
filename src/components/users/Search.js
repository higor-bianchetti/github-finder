import React, { useState, useContext } from 'react';

import githubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const contextGithub = useContext(githubContext);
  const alertContext = useContext(AlertContext);

  const [user, setUser] = useState(''); // '' -> Default Value

  const onSubmit = (event) => {
    event.preventDefault();
    if (user === '') {
      alertContext.showAlert('Please enter something to search for', 'danger');
    } else {
      contextGithub.searchUsers(user);
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
      {contextGithub.users.length > 0 && (
        <button
          className='btn btn-secondary btn-block'
          onClick={contextGithub.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
