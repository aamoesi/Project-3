import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
// import { getCurrentAdminProfile } from '../../actions/adminProfile';
import { getCurrentProfile } from '../../actions/profile';
import { privateDecrypt } from 'crypto';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
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
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

// const Dashboard = ({ getCurrentAdminProfile, auth, profile }) => {
//   useEffect(() => {
//     getCurrentAdminProfile();
//   }, [getCurrentAdminProfile]);
// };

// const adminDashboard = props => {
//   return (
// <Spinner />

// <Fragment>
//   <h1 className='large text-primary'>Administrative Dashboard</h1>

{
  /* <p className='lead'>
            <i className='fas fa-user' /> Welcome {userAdmin && userAdmin.name}
          </p> */
}

//       <Fragment>
//         <AdminDashboardActions />
//       </Fragment>
//     </Fragment>
//   );
// };
// }

// adminDashboard.propTypes = {

//     getCurrentAdminProfile: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     profile: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//     auth: state.auth,
//     profile: state.profile,
// })

// export default connect(mapStateToProps, { getCurrentAdminProfile })(adminDashboard);
