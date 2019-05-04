import React, { Component, Fragment } from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
import Header from './layout/Header';
import Main from './layout/Main';
import store from '../store';
import Alerts from './layout/Alerts';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Main />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
