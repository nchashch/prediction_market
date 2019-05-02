import React, { Component } from 'react';

class MarketList extends Component {
  constructor() {
    super();
    this.state = {
      markets: [],
    };
  }

  componentDidMount() {
    fetch('/api/markets/')
      .then(res => res.json())
      .then(body => {
        this.setState({markets: body});
      });
  }

  render() {
    const markets = this.state.markets.map((market) => (
      <li key={market.id}>
        Name: {market.name}<br/>
        B: {market.b}<br/>
        Number of outcomes: {market.number_of_outcomes}<br/>
        Start date: {market.start_date}<br/>
        End date: {market.end_date}<br/>
        Resolved: {market.resolved ? 'true' : 'false'}<br/><br/>
      </li>
    ));
    return (
      <div>
        <h1>Market list</h1>
        <ul>
          {markets}
        </ul>
      </div>
    );
  }
}

export default MarketList;
