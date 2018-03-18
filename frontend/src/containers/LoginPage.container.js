import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as LoginPageActions from '../actions/auth/login-page';
import LoginPage from '../components/auth/LoginPage';


function mapStateToProps(state) {
    return state.loginPage
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginPageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
