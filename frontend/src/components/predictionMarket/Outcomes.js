import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOutcomes } from '../../actions/outcomes';
import { OrderForm } from './OrderForm';

export class Outcomes extends Component {
  static propTypes = {
    outcomes: PropTypes.array.isRequired,
    getOutcomes: PropTypes.func.isRequired,
    marketId: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.getOutcomes(this.props.marketId);
  }

  render() {
    return (
      <Fragment>
        <h1>Outcome list for market {this.props.marketId}</h1>
        <ul>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Market</th>
                <th>Outcome date</th>
                <th>Outstanding</th>
                <th>Probability</th>
                <th>Winning</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { this.props.outcomes.map((outcome) => (
                <tr key={outcome.id}>
                  <td>{outcome.id}</td>
                  <td>{outcome.market}</td>
                  <td>{outcome.outcome_date}</td>
                  <td>{outcome.outstanding}</td>
                  <td>{Math.round(outcome.probability*1000)/10 + '%'}</td>
                  <td>{outcome.winning ? 'true' : 'false'}</td>
                  <td><OrderForm outcomeId={outcome.id}/></td>
                </tr>
              )) }
            </tbody>
          </table>
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  outcomes: state.outcomes.outcomes
});

export default connect(mapStateToProps, { getOutcomes })(Outcomes);
