import React from 'react';
import PropTypes from 'prop-types';

class MainPage extends React.Component {
  static propTypes = {
    loginActions: PropTypes.shape({
      logout: PropTypes.func.isRequired
    })
  };

  render() {

    return (
      <div className="container">
        <h1>WORK</h1>
      </div>
    )
  }
}

export default MainPage;
