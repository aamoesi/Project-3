import React, { Fragment, useSate } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <p>Testing</p>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
