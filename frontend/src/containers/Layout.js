import React from 'react';
import {Link} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {logout} from '../actions/auth/login-page';


class Layout extends React.Component {

  handleLogoutClick = (e) => {
    e.preventDefault();
    this.props.loginActions.logout();
  };

  render() {
    const {isLoggedIn} = this.props;
    return (
      <div>
        {isLoggedIn && <div>

          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                </button>
                <i className="navbar-brand"><Link to="/"><div className="brand_image"/></Link></i>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#logout" onClick={this.handleLogoutClick}>
                      <span className="glyphicon glyphicon-log-out"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
        }
        {this.props.children}
      </div>
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
