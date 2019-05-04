import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, message, alert } = this.props;
    if (error !== prevProps.error) {
      console.log(error);
      if (error.status !== 200) alert.error(`Error occured with status code ${error.status}`);
      if (error.msg.name) alert.error(`Name ${error.msg.name.join()}`);
      if (error.msg.b) alert.error(`B ${error.msg.name.join()}`);
      if (error.msg.start_date) alert.error(`Start date ${error.msg.name.join()}`);
      if (error.msg.end_date) alert.error(`End date ${error.msg.name.join()}`);
    }
    if (message !== prevProps.message) {
      if (message.deleteMarket) alert.success(message.deleteMarket);
      if (message.createMarket) alert.success(message.createMarket);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.message
});

export default connect(mapStateToProps)(withAlert()(Alerts));
