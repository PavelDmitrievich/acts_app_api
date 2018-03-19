import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as MainPageActions from '../actions/main-page';
import {logout} from '../actions/auth/login-page';
import MainPage from '../components/MainPage';


function mapStateToProps(state) {
    return {
      ...state.loginPage,
      ...state.mainPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(MainPageActions, dispatch),
      loginActions: bindActionCreators({logout}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
