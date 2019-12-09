import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import AdminDashboardActions from './adminDashboardActions';
import { getCurrentAdminProfile } from '../../actions/adminProfile';
import Experience from './Experience';
import Progress from './Progress';

const Dashboard = ({
  getCurrentAdminProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentAdminProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>PATIENT DASHBOARD</h1>
      <p className='lead'>
        <i className='fas fa-user whiteText2'></i> Patient Portal for:{' '}
        {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <AdminDashboardActions />
          <Experience experience={profile.experience} />
          <Progress education={profile.education} />
        </Fragment>
      ) : (
        <Fragment>
          <p className='boldText'>
            You do not have any patient profiles set up yet. Please add patients
            below.
          </p>
          <Link to='/create-profile' className='btn btn-primaryAdmn my-1'>
            Create Patient Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentAdminProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentAdminProfile })(Dashboard);

// const adminDashboard = props => {

//     return (
//         // <Spinner />

//         <Fragment>

//             <AdminDashboardActions />

//         </Fragment>
//     )

// }

// adminDashboard.propTypes = {

// }

// export default adminDashboard;
