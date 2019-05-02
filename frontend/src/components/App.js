import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './layout/Header';
import Main from './layout/Main';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Main />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
