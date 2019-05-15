import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getPositions } from '../../actions/positions';

function Positions() {
  const positions = useSelector(state => state.positions.positions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPositions());
  }, []);

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
            { positions.map((position) => (
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

export default Positions;
