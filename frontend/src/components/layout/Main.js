import React, { Component } from 'react';
import MarketList from '../MarketList';

class Main extends Component {
  render() {
    return (
        <main>
        <a href='/api/markets'>markets API</a>
        <MarketList />
        </main>
    );
  }
}

export default Main;
