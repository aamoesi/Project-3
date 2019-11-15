import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Game1 } from '../../actions/profile';

const Game1 = () => {
  return (
    <Fragment>
      <h1>Tic Tac Toe</h1>
    </Fragment>
  );
};

// CreateProfile.propTypes = {
//   createProfile: PropTypes.func.isRequired
// };

export default connect(null, { Game1 })(withRouter(Game1));
