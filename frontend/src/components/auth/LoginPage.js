import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router";
import { Form, Grid, Segment, Container } from 'semantic-ui-react'


class LoginPage extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    isProcessing: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      changeUsername: PropTypes.func.isRequired,
      changePassword: PropTypes.func.isRequired,
      login: PropTypes.func.isRequired
    })
  };

  handleUsernameChange = (event) => {
    this.props.actions.changeUsername(event.target.value);
  };

  handlePasswordChange = (event) => {
    this.props.actions.changePassword(event.target.value);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.actions.login();
  };

  render() {
    const {email, password, isProcessing} = this.props;
    return (

        <Container textAlign='center'>
        <h1>WELCOME!</h1>
        <Form loading={isProcessing} size="large" onSubmit={this.handleFormSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Email' placeholder='email' disabled={isProcessing} value={email} onChange={this.handleUsernameChange} />
            <Form.Input type='password' fluid label='Password' disabled={isProcessing} placeholder='password' value={password} onChange={this.handlePasswordChange} />
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button success={isProcessing} disabled={isProcessing}>Submit</Form.Button>
        </Form>
         </Container>
    )
  }
}

export default LoginPage;
