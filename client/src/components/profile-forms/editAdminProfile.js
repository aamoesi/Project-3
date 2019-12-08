import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAdminProfile, getCurrentAdminProfile } from '../../actions/adminProfile';

const EditProfile = ({
    profile: { profile, loading },
    createAdminProfile,
    getCurrentAdminProfile,
    history
}) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(() => {
        getCurrentAdminProfile();

        setFormData({
            // company: loading || !profile.company ? '' : profile.company,
            // website: loading || !profile.website ? '' : profile.website,
            // location: loading || !profile.location ? '' : profile.location,
            // status: loading || !profile.status ? '' : profile.status,
            // skills: loading || !profile.skills ? '' : profile.skills.join(','),
            // githubusername:
            //     loading || !profile.githubusername ? '' : profile.githubusername,
            // bio: loading || !profile.bio ? '' : profile.bio,
            // twitter: loading || !profile.social ? '' : profile.social.twitter,
            // facebook: loading || !profile.social ? '' : profile.social.facebook,
            // linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            // youtube: loading || !profile.social ? '' : profile.social.youtube,
            // instagram: loading || !profile.social ? '' : profile.social.instagram
        });
    }, [loading, getCurrentAdminProfile]);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createAdminProfile(formData, history, true);
    };

    return (
        <Fragment>
            <h1 className='large text-primary'>Create or Edit Your Patient's Profile</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Add some changes to your patients profile
      </p>
            <small>* = required field</small>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <select name='status' value={status} onChange={e => onChange(e)}>
                        <option>* What is your patients status?</option>
                        <option value='Tramatic Brain Ingury'>Tramatic Brain Ingury</option>
                        <option value='Learning Disabled'>Learning Disabled</option>
                        <option value='Alzheimers'>Alzheimers</option>
                        <option value='Dimentia'>Dimentia</option>
                        <option value='Dyslexia'>Dyslexia</option>
                        {/* <option value='Instructor'>Instructor or Teacher</option>
                        <option value='Intern'>Intern</option>
                        <option value='Other'>Other</option> */}
                    </select>
                    <small className='form-text'>
                        Give us an idea of your patients status
          </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Patients Name'
                        name='company'
                        value={company}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        What is your patients Name?
          </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Date of Birth'
                        name='website'
                        value={website}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        What is your patients date of birth?
          </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Patient Location'
                        name='location'
                        value={location}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        City & state suggested (eg. Boston, MA)
          </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Cognitive Impairments'
                        name='skills'
                        value={skills}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Please list primary cognitive impairments (eg. Memory Loss, Confusion, etc.)
          </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Length of Treatment'
                        name='githubusername'
                        value={githubusername}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        How long has the patient been in treatment?
          </small>
                </div>
                <div className='form-group'>
                    <textarea
                        placeholder='A short bio of patient progress'
                        name='bio'
                        value={bio}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>Please provide a summary of the patients progress during treatment.</small>
                </div>

                <input type='submit' className='btn btn-primaryAdmn my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
        </Link>

            </form>
        </Fragment>
    );
};

EditProfile.propTypes = {
    createAdminProfile: PropTypes.func.isRequired,
    getCurrentAdminProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { createAdminProfile, getCurrentAdminProfile }
)(withRouter(EditProfile));
