import React, { Component } from 'react';
import Markets from '../predictionMarket/Markets';
import Outcomes from '../predictionMarket/Outcomes';
import Positions from '../predictionMarket/Positions';
import Orders from '../predictionMarket/Orders';
import Portfolios from '../predictionMarket/Portfolios';
import MarketForm from '../predictionMarket/MarketForm';

class Main extends Component {
  render() {
    return (
        <main>
          <MarketForm />
          <Markets />
        </main>
    );
  }
}

export default Main;
