import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import AdminDashboardActions from './adminDashboardActions';
import { getCurrentAdminProfile } from '../../actions/adminProfile';
import PrivateRoute from '../routing/PrivateRoute';

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
        <h1 className='large text-primary'>ADMIN DASHBOARD</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
            <Fragment>
              <p className='boldText'>
                You have not yet setup a profile, please add some info
          </p>
              <Link to='/create-profile' className='btn btn-primaryAdmn my-1'>
                Create Profile
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

export default connect(
  mapStateToProps,
  { getCurrentAdminProfile }
)(Dashboard);













































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