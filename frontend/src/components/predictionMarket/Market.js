import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMarkets } from '../../actions/markets';
import PropTypes from 'prop-types';
import Outcomes from '../predictionMarket/Outcomes';

class Market extends Component {
  static propTypes = {
    marketId: PropTypes.string.isRequired,
    markets: PropTypes.array.isRequired,
    getMarkets: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getMarkets();
  }

  render() {
    return (
        <main>
          <Outcomes marketId={this.props.marketId} />
        </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  markets: state.markets.markets,
  marketId: ownProps.match.params.marketId
});

export default connect(mapStateToProps, { getMarkets })(Market);
