import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarkets } from '../../actions/markets'

export class Markets extends Component {
  static propTypes = {
    markets: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getMarkets();
  }

  render() {
    return (
      <Fragment>
        <a href='/api/markets'>markets API</a>
        <h1>Market list</h1>
        <ul>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>B</th>
                <th>Number of outcomes</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Resolved</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { this.props.markets.map((market) => (
                <tr key={market.id}>
                  <td>{market.id}</td>
                  <td>{market.name}</td>
                  <td>{market.b}</td>
                  <td>{market.number_of_outcomes}</td>
                  <td>{market.start_date}</td>
                  <td>{market.end_date}</td>
                  <td>{market.resolved ? 'true' : 'false'}</td>
                  <td><button>Delete</button></td>
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
  markets: state.markets.markets
});

export default connect(mapStateToProps, { getMarkets })(Markets)
