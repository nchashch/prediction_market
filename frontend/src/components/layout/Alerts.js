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
      /* if (error.status !== 200) alert.error(`Error occured with status code ${error.status}`);*/
      for (const name in error.msg) {
        alert.error(`${name} ${error.msg[name]}`)
      }
    }
    if (message !== prevProps.message) {
      for (const name in message) {
        alert.success(message[name]);
      }
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
