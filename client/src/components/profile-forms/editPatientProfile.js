import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    severity: '',
    status: '',
    symptoms: '',
    goals: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      name: loading || !profile.name ? '' : profile.name,
      duration: loading || !profile.duration ? '' : profile.duration,
      severity: loading || !profile.severity ? '' : profile.severity,
      status: loading || !profile.status ? '' : profile.status,
      symptoms: loading || !profile.symptoms ? '' : profile.symptoms.join(','),
      goals: loading || !profile.goals ? '' : profile.goals
    });
  }, [loading, getCurrentProfile]);

  const { name, duration, severity, status, symptoms, goals } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Patient's Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's start by getting some information
        about your patient.
      </p>
      <small className='whiteText'>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* What is your patient's current status?</option>
            <option value='Dementia'>Dementia</option>
            <option value='Alzheimers'>Alzheimers</option>
            <option value='Dyslexia'>Dyslexia</option>
            <option value='Chronic Traumatic Encephalopathy'>
              Chronic Traumatic Encephalopathy
            </option>
            <option value='ADHD'>ADHD</option>
            <option value='Post Traumatic Stress Disorder'>
              Post Traumatic Stress Disorder
            </option>
            <option value='Mild Cognitive Impairment'>
              Mild Cognitive Impairment
            </option>
            <option value='Other'>Other</option>
          </select>
          <small className='whiteText'>
            Give us an idea of what cognitive imairment your patient suffers
            from.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Patient Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
          <small className='whiteText'>
            Please list your patient's full legal name.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='History of Illness'
            name='duration'
            value={duration}
            onChange={e => onChange(e)}
          />
          <small className='whiteText'>
            How long has your patient suffered from their impairment?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Severity of Illness'
            name='severity'
            value={severity}
            onChange={e => onChange(e)}
          />
          <small className='whiteText'>
            How is your patient's life impacted by their illness? (ie., Greatly
            Impacted, Moderatly Imacted, Mildly Impacted)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Symptoms'
            name='symptoms'
            value={symptoms}
            onChange={e => onChange(e)}
          />
          <small className='whiteText'>
            Please list your patient's major symptoms.
          </small>
        </div>

        <div className='form-group'>
          <textarea
            placeholder='Please list your treatment goals'
            name='goals'
            value={goals}
            onChange={e => onChange(e)}
          />
          <small className='whiteText'>
            What do you hope to achieve through this cognitive improvement
            therapy?
          </small>
        </div>

        <input type='submit' className='btn btn-primaryAdmn my-1' />
        <Link className='btn btn-light my-1' to='/adminDashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
