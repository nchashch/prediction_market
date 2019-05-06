import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPortfolios } from '../../actions/portfolios';

export class Portfolios extends Component {
  static propTypes = {
    portfolios: PropTypes.array.isRequired,
    getPortfolios: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getPortfolios();
  }

  render() {
    return (
      <Fragment>
        <h1>Portfolio list</h1>
        <ul>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Owner</th>
                <th>Cash</th>
              </tr>
            </thead>
            <tbody>
              { this.props.portfolios.map((portfolio) => (
                <tr key={portfolio.id}>
                  <td>{portfolio.id}</td>
                  <td>{portfolio.name}</td>
                  <td>{portfolio.owner}</td>
                  <td>{portfolio.cash}</td>
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
  portfolios: state.portfolios.portfolios
});

export default connect(mapStateToProps, { getPortfolios })(Portfolios);
