import React from 'react';
import PropTypes from 'prop-types';

class MainPage extends React.Component {
  static propTypes  = {
  };

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      window.location = "/login"
    }
  };

  render () {
    return (
      <div>
        <h1>MAIN PAGE</h1>
      </div>
    )
  }
}

export default MainPage;