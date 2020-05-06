import React from 'react';
import PropTypes from 'prop-types';

import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

RepoItem.propTypes = {
  repos: PropTypes.array,
};

export default Repos;
