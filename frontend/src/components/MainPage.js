import React from 'react';
import PropTypes from 'prop-types';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

class MainPage extends React.Component {
  static propTypes  = {
    acts: PropTypes.array.isRequired,
    isFetchingActs: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      fetchActs: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.fetchActs();
    if (!this.props.isLoggedIn) {
      window.location = "/login"
    }
  };

  render () {
    const {acts} = this.props;
    return (
      <div>
        <h1>Привет, {localStorage.getItem('user_name')}!</h1>
        <BootstrapTable data={ acts } search pagination>
          <TableHeaderColumn dataField='act_number' isKey>Порядковый номер акта</TableHeaderColumn>
          <TableHeaderColumn dataField='conclusion'>Заключение</TableHeaderColumn>
          <TableHeaderColumn dataField='storage_id'>Номер склада</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default MainPage;