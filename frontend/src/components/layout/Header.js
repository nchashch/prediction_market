import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { user, isAuthenticated } = this.props.auth;
    const authLinks = (
      <ul>
        <li><button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">Logout</button></li>
      </ul>
    );
    const guestLinks = (
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
    );
    return (
      <header className="container">
        <h1><Link to="/">Prediction market</Link></h1>
        {isAuthenticated ? authLinks : guestLinks}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
