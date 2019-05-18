import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getOutcomes } from '../../actions/outcomes';
import OrderForm from './OrderForm';

function Outcomes(props) {
  const outcomes = useSelector(state => state.outcomes.outcomes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOutcomes(props.marketId));
  }, [props.marketId]);

  return (
    <Fragment>
      <h1>Outcome list for market {props.marketId}</h1>
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
            { outcomes.map((outcome) => (
              <tr key={outcome.id}>
                <td>{outcome.id}</td>
                <td>{outcome.market}</td>
                <td>{outcome.outcome_date}</td>
                <td>{outcome.outstanding}</td>
                <td>{Math.round(outcome.probability*1000)/10 + '%'}</td>
                <td>{outcome.winning ? 'true' : 'false'}</td>
                <td><OrderForm outcomeId={outcome.id} marketId={outcome.market}/></td>
              </tr>
            )) }
          </tbody>
        </table>
      </ul>
    </Fragment>
  );
}

Outcomes.propTypes = {
  marketId: PropTypes.string.isRequired
}

export default Outcomes;
