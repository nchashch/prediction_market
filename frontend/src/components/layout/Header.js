import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="container">
        <h1>Prediction market</h1>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/register">register</Link></li>
        </ul>
      </header>
    );
  }
}

export default Header;
