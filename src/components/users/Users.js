import React, { useContext } from 'react';

import githubContext from '../../context/github/githubContext';

import UserItem from './UserItem';
import Loading from '../layout/Loading';

const Users = () => {
  const contextGithub = useContext(githubContext);
  const { loading, users } = contextGithub;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
