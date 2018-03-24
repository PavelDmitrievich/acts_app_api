import React from "react";
import PropTypes from "prop-types";
import {Button, Container, Form, Message, Input} from 'semantic-ui-react';

class RegistrationPage extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    sirName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConf: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      changeName: PropTypes.func.isRequired,
      changePatronymic: PropTypes.func.isRequired,
      changeEmail: PropTypes.func.isRequired,
      changeSirName: PropTypes.func.isRequired,
      changePosition: PropTypes.func.isRequired,
      changePassword: PropTypes.func.isRequired,
      changePassConf: PropTypes.func.isRequired,
      startRegister: PropTypes.func.isRequired
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      same: true
    }
  }

  handleChangeName = (event) => {
    this.props.actions.changeName(event.target.value)
  };
  handleRegistration = () => {
    this.props.actions.startRegister()
  };
  handleChangeSirName = (event) => {
    this.props.actions.changeSirName(event.target.value)
  };
  handleChangePatronymic = (event) => {
    this.props.actions.changePatronymic(event.target.value)
  };
  handleChangeEmail = (event) => {
    this.props.actions.changeEmail(event.target.value)
  };
  handleChangePosition = (event) => {
    this.props.actions.changePosition(event.target.value)
  };
  handleChangePassword = (event) => {
    this.props.actions.changePassword(event.target.value)
  };
  handleChangePasswordConfirmation = (event) => {
    this.props.password === event.target.value ? this.setState({same: true}) : this.setState({same: false});
    this.props.actions.changePassConf(event.target.value);
  };

  renderMessage = () => {
    return (
      <Message
        error
        header='Пароли не совпадают'
      />
    )
  };

  renderInputIcon = () => {
    if (this.props.passwordConf.length !== 0 && this.state.same) {
      return "checkmark"
    } else if (this.props.passwordConf.length !== 0 && !this.state.same) {
      return "remove"
    } else {
      return "pencil"
    }
  };

  render() {
    const {name, sirName, email, patronymic, position, password, passwordConf} = this.props;
    const {same} = this.state;
    return (
      <Container>
        <Form className={same ? "large ui success form" : "large ui error form"} size="large" onSubmit={this.handleRegistration}>
          <h1>Регистрация</h1>
          <br/>
          <Form.Field>
            <label>Имя</label>
            <input
              placeholder='Введите ваше имя ...'
              onChange={this.handleChangeName}
              value={name}
            />
          </Form.Field>
          <Form.Field>
            <label>Фамилия</label>
            <input
              placeholder='Введите вашу фамилию ...'
              value={sirName}
              onChange={this.handleChangeSirName}
            />
          </Form.Field>
          <Form.Field>
            <label>Отчество</label>
            <input
              placeholder='Введите ваше отчество ...'
              value={patronymic}
              onChange={this.handleChangePatronymic}
            />
          </Form.Field>
          <Form.Field>
            <label>Логин</label>
            <input
              placeholder='Введите ваш логин ...'
              value={email}
              onChange={this.handleChangeEmail}
            />
          </Form.Field>
          <Form.Field>
            <label>Должность</label>
            <input
              placeholder='Ваша должность ...'
              value={position}
              onChange={this.handleChangePosition}
            />
          </Form.Field>
          <Form.Field>
            <label>Пароль</label>
            <Input
              type="password"
              placeholder='Введите пароль ...'
              value={password}
              onChange={this.handleChangePassword}
              icon={same ? "checkmark" : "remove"}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className={same ? "field" : "error field"}
              type="password"
              fluid
              label='Подтверждение пароля'
              placeholder='Повторите пароль ...'
              value={passwordConf}
              onChange={this.handleChangePasswordConfirmation}
              disabled={password.length === 0}
              icon={this.renderInputIcon()}
            />
            {this.renderMessage()}
          </Form.Field>
          <Button disabled={!same} type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default RegistrationPage;