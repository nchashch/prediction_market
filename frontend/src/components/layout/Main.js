import React, { Component } from 'react';
import Markets from '../predictionMarket/Markets';
import MarketForm from '../predictionMarket/MarketForm';

class Main extends Component {
  render() {
    return (
        <main className="container">
        <MarketForm />
        <Markets />
        </main>
    );
  }
}

export default Main;
