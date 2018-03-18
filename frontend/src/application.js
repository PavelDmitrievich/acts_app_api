import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory} from "react-router";
import fetchIntercept from "fetch-intercept";
import configureStore from "./store";
import Root from "./containers/Root";
import {logout, loadAuth} from './actions/auth/login-page';

export default class Application {
  static createApplication() {
    return new Application();
  }

  init() {
    this.createStore();
    this.createHistory();
    this.createFetchInterceptor();
    this.loadAuthTokenToStore();
    this.enableHotReload();
  }

  start() {
    this.renderComponent(Root)
  }

  createStore() {
    this.store = configureStore();
  }

  createHistory() {
    this.history = syncHistoryWithStore(browserHistory, this.store)
  }

  loadAuthTokenToStore() {
    this.store.dispatch(loadAuth());
  }

  createFetchInterceptor() {
    this.intersecptUnregister = fetchIntercept.register({
      response: (response) => {
        if (response.status === 401) {
          this.store.dispatch(logout());
        }
        return response
      }
    })
  }

  renderComponent(Component) {
    ReactDOM.render((
      <div>
        <div className=" context" style={{paddingBottom: '60px'}}>

          <AppContainer>
            <Component store={this.store} history={this.history}/>
          </AppContainer>
        </div>
        <footer>
          <div className="made_in">Developed by <a target='_blank' href="http://attractor-software.com">PAVEL</a></div>
        </footer>
      </div>
    ), document.getElementById('root'))
  }

  enableHotReload() {
    if (module.hot) {
      module.hot.accept('./containers/Root', () => {
        this.renderComponent(Root);
      });
    }
  }
}
