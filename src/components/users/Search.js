import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    user: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.user === '') {
      this.props.setAlert('Please enter something to search for', 'danger');
    } else {
      this.props.searchUsers(this.state.user);
      this.setState({ user: '' });
    }
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='user'
            placeholder='Search Users...'
            value={this.state.user}
            onChange={this.onChange}
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
  }
}

export default Search;
