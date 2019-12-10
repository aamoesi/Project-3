import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteProgress } from '../../actions/profile';

const Progress = ({ progress, deleteProgress }) => {
  const progresss = progress.map(edu => (
    <tr key={edu._id}>
      <td className='whiteText'>{edu.game}</td>
      <td className='hide-sm whiteText'>{edu.observations}</td>
      <td className='whiteText'>
        <Moment format='YYYY/MM/DD'>{moment.utc(edu.from)}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(edu.to)}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteProgress(edu._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <p className='my-2 whiteText1'>Patient Progress</p>
      <table className='table'>
        <thead>
          <tr>
            <th>Game Used for Treatment</th>
            <th className='hide-sm'>Observations</th>
            <th className='hide-sm'>Period Game Used</th>
            <th />
          </tr>
        </thead>
        <tbody>{progresss}</tbody>
      </table>
    </Fragment>
  );
};

Progress.propTypes = {
  progress: PropTypes.array.isRequired,
  deleteProgress: PropTypes.func.isRequired
};

export default connect(null, { deleteProgress })(Progress);
