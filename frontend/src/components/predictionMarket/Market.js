import React from 'react';
import { getMarkets } from '../../actions/markets';
import Outcomes from '../predictionMarket/Outcomes';

function Market(props) {
  const marketId = props.match.params.marketId
  return (
    <main>
      <Outcomes marketId={marketId} />
    </main>
  );
}

export default Market;
