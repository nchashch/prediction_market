import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPortfolios } from '../../actions/portfolios';

function Portfolios() {
  const portfolios = useSelector(state => state.portfolios.portfolios);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPortfolios());
  }, []);

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
            { portfolios.map((portfolio) => (
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

export default Portfolios;
