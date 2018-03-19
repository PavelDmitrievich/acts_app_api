import React from 'react';
import PropTypes from 'prop-types';
import {Form, Container, Message} from 'semantic-ui-react';


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

  componentDidMount() {
    if (this.props.isLoggedIn) {
      window.location = "/"
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.actions.login();
  };

  render() {
    const {email, password, isProcessing, errors} = this.props;
    console.log('errors ===> ', this.props.errors.length);
    const hasError = errors !== undefined && errors !== '';
    return (
      <Container textAlign='center'>
        {hasError &&
        <Message negative>
          <Message.Header>Что то пошло не так! Проверьте правильность ввода данных.</Message.Header>
          <p>{errors}</p>
        </Message>}
        <h1>WELCOME!</h1>
        <Form loading={isProcessing} size="large" onSubmit={this.handleFormSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Email' placeholder='email' disabled={isProcessing} value={email}
                        onChange={this.handleUsernameChange}/>
            <Form.Input type='password' fluid label='Password' disabled={isProcessing}
                        placeholder='password' value={password} onChange={this.handlePasswordChange}/>
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions'/>
          <Form.Button disabled={isProcessing}>Submit</Form.Button>
        </Form>
      </Container>
    )
  }
}

export default LoginPage;
