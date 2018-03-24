import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as RegistrationPageActions from '../actions/auth/registration';
import RegistrationPage from '../components/auth/RegistrationPage';


function mapStateToProps(state) {
  return state.registrationPage
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RegistrationPageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)
