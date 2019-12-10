import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentAdminProfile } from '../../actions/profile';
import Gamefeed from '../Gamefeed'
import Dajjmafeed from '../Dajjmafeed'

const Dashboard = ({
  getCurrentAdminProfile,
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
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i>Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
            <Fragment>
              {/* <Link to='/!#' className='btn btn-primary my-1'>
            Create Profile
          </Link> */}
            </Fragment>
          )}

        {/* {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
            <Fragment>
              <Link to='/Game1' className='btn btn-light my-1'>
                Simple Tic Tac Toe
              </Link>
              <Link to='/Game2' className='btn btn-light my-1'>
                Tetris
              </Link>
              <Link to='/pokemon-clicky' className='btn btn-light my-1'>
                Pokemon Clicky
              </Link>
            </Fragment>
          )} */}

        <Fragment>
          <h2 className="h2title">By DAJJMA!</h2>
        </Fragment>

        {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
            <Fragment>
              <Dajjmafeed />
            </Fragment>
          )}

        <Fragment>
          <h2 className="h2title">By Other Developers</h2>
        </Fragment>

        {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
            <Fragment>
              <Gamefeed />
            </Fragment>
          )}

      </Fragment>
    );
};

Dashboard.propTypes = {
  getCurrentAdminProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentAdminProfile })(Dashboard);
