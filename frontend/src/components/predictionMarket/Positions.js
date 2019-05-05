import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPositions } from '../../actions/positions';

export class Positions extends Component {
  static propTypes = {
    positions: PropTypes.array.isRequired,
    getPositions: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getPositions();
  }

  render() {
    return (
      <Fragment>
        <h1>Position list</h1>
        <ul>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Market</th>
                <th>Outcome</th>
                <th>Portfolio</th>
                <th>Amount</th>
                <th>Closed</th>
              </tr>
            </thead>
            <tbody>
              { this.props.positions.map((position) => (
                <tr key={position.id}>
                  <td>{position.id}</td>
                  <td>{position.market}</td>
                  <td>{position.outcome}</td>
                  <td>{position.portfolio}</td>
                  <td>{position.amount}</td>
                  <td>{position.closed ? 'true' : 'false'}</td>
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
  positions: state.positions.positions
});

export default connect(mapStateToProps, { getPositions })(Positions);
