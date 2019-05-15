import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getMarkets, deleteMarket } from '../../actions/markets';

function Markets() {
  const markets = useSelector(state => state.markets.markets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarkets());
  });
  return (
    <Fragment>
      <h1>Market list</h1>
      <ul>
        <table className="table table-striped">
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
            { markets.map((market) => (
              <tr key={market.id}>
                <td>{market.id}</td>
                <td><Link to={'/markets/' + market.id}>{market.name}</Link></td>
                <td>{market.b}</td>
                <td>{market.number_of_outcomes}</td>
                <td>{market.start_date}</td>
                <td>{market.end_date}</td>
                <td>{market.resolved ? 'true' : 'false'}</td>
                <td><button onClick={() => { dispatch(deleteMarket(market.id)) } } className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            )) }
          </tbody>
        </table>
      </ul>
    </Fragment>
  );
}

export default Markets;
