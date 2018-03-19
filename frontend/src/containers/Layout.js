import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {logout} from '../actions/auth/login-page';
import { Input, Menu } from 'semantic-ui-react';
import { Container, Icon } from 'semantic-ui-react';


class Layout extends React.Component {

  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogoutClick = (e) => {
    e.preventDefault();
    this.props.loginActions.logout();
  };

  render() {
    const {isLoggedIn} = this.props;
    const { activeItem } = this.state;
    return (
      <Container fluid>
        {isLoggedIn && <div>

          <Menu secondary>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item onClick={this.handleLogoutClick}><Icon name="log out"/></Menu.Item>
            </Menu.Menu>
          </Menu>

        </div>
        }
        {this.props.children}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return state.loginPage
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators({logout}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
