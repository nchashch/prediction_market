import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getPortfolio } from '../../actions/portfolio';

function Header(props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const portfolio = useSelector(state => state.portfolio.portfolio);
  useEffect(() => {
    dispatch(getPortfolio());
  });

  const onLogout = () => dispatch(logout());

  const { user, isAuthenticated } = auth;
  const authLinks = (
    <Fragment>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/positions">Positions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/orders">Orders</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text mr-3">
          <strong>
            { portfolio ? `Cash: ${Math.round(portfolio.cash*100)/100}` : '' }
          </strong>
        </span>
        <span className="navbar-text mr-3">
          <strong>
             { user ? ` Welcome ${user.username}` : '' }
          </strong>
        </span>
        <li className="nav-item">
          <button onClick={onLogout} className="nav-link btn btn-info btn-sm text-light">Logout</button>
        </li>
      </ul>
    </Fragment>
  );
  const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Prediction market</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/markets">Markets</Link>
          </li>
        </ul>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
}

export default Header;
