import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
import Header from './layout/Header';
import Market from './predictionMarket/Market';
import Markets from './predictionMarket/Markets';
import Positions from './predictionMarket/Positions';
import Orders from './predictionMarket/Orders';
import store from '../store';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Markets} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route path="/markets/:marketId" component={Market} />
                  <Route path="/markets/" component={Markets} />
                  <Route path="/positions/" component={Positions} />
                  <Route path="/orders/" component={Orders} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
