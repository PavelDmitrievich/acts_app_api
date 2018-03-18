import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from '../routes';
import ReduxToastr from 'react-redux-toastr'

class Root extends React.Component {
  render() {
    const {store, history} = this.props;

    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes}/>
          <ReduxToastr
            timeOut={5000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar/>
        </div>

      </Provider>
    )
  }
}

export default Root;
