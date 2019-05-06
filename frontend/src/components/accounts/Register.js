import { Redirect } from 'react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/message';
import PropTypes from 'prop-types';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    register: PropTypes.func.isRequired
  }

  onSubmit = e => {
    e.preventDefault();
    const { password, password2 } = this.state;
    if(password !== password2) {
      this.props.createMessage({ passwordsDoNotMatch: "Passwords don't match." });
    } else {
      this.props.register(this.state);
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, email, password, password2 } = this.state;
    if(this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Repeat password</label>
              <input
                type="text"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <p>
              Already have an account? <Link to="/login">login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(Register);
