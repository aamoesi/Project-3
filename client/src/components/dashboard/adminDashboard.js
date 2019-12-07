import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';
import AdminDashboardActions from './adminDashboardActions';
import { getCurrentAdminProfile } from '../../actions/adminProfile';
import PrivateRoute from '../routing/PrivateRoute';

const adminDashboard = props => {


    return (
        // <Spinner />

        <Fragment>

            <AdminDashboardActions />

        </Fragment>
    )
}


adminDashboard.propTypes = {

}


export default adminDashboard;