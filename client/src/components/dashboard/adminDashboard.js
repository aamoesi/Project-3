import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';
import AdminDashboardActions from './adminDashboardActions';
import { getCurrentAdminProfile } from '../../actions/adminProfile';
import PrivateRoute from '../routing/PrivateRoute';

// const adminDashboard = ({ getCurrentAdminProfile, auth, profile }) => {
//     useEffect(() => {
//         getCurrentAdminProfile();
//     }, []);

const adminDashboard = props => {


    return (
        // <Spinner />

        <Fragment>

            <AdminDashboardActions />

        </Fragment>
    )
}
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



adminDashboard.propTypes = {

}


export default adminDashboard;