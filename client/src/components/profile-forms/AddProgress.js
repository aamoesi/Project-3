import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProgress } from '../../actions/profile';

const AddProgress = ({ addProgress, history }) => {
  const [formData, setFormData] = useState({
    game: '',
    observations: '',
    treatmentgoals: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    game,
    observations,
    treatmentgoals,
    from,
    to,
    current,
    description
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Monitor Progress.</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Track your patient's improvement as
        they progress through the program.
      </p>
      <small className='whiteText'>* = required field</small>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addProgress(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Which game is being used for treatment?'
            name='game'
            value={game}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Is the treatment effective?  Please provide bried observations.'
            name='observations'
            value={observations}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Treatment Goals'
            name='treatmentgoals'
            value={treatmentgoals}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='whiteText'>
          <p>Date Started Using this Game</p>
          <input
            type='date'
            name='from'
            value={from}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p className='whiteText'>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{' '}
            Patient currently using this game for treatment.
          </p>
        </div>
        <div className='whiteText'>
          <p>Date Patient Stopped Using this Game</p>
          <input
            type='date'
            name='to'
            value={to}
            onChange={e => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Please provide a detailed description of your patients progress.'
            value={description}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primaryAdmn my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddProgress.propTypes = {
  addProgress: PropTypes.func.isRequired
};

export default connect(null, { addProgress })(withRouter(AddProgress));
