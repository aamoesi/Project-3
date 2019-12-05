import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentAdminProfile } from '../../actions/adminProfile';
import PrivateRoute from '../routing/PrivateRoute';

// const adminDashboard = ({ getCurrentAdminProfile, auth, profile }) => {
//     useEffect(() => {
//         getCurrentAdminProfile();
//     }, []);

const adminDashboard = props => {


    return (
        <h1>

            This will be our ADMIN Dashboard.
            <br />

            Goals for this dashoard:
            <br />
            1. Display users progress with games.
            <br />
            2. Have area for Admin users to keep notes and track progress.
            <br />
            3. Administrators comments.
            <br />
            4. Inoformation about patients.
            <br />
            5. Information about Administrators.

        </h1>


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