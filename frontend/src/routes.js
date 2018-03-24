import React from 'react';
import App from "./containers/App";
import Layout from "./containers/Layout";
import MainPage from "./containers/MainPage.container";
import { IndexRoute, Route } from "react-router";
import LoginPage from "./containers/LoginPage.container";
import RegistrationPage from "./containers/RegistrationPage.container";


export default (
  <Route component={App}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage}/>
      <Route path="/login" component={LoginPage} />
      <Route path="/registration" component={RegistrationPage}/>
    </Route>
  </Route>
)
