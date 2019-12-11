import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

class ParticleBackground extends Component{
  particleOpt = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

  render(){
      return (
          <div>
            <Particles 
            params={this.particleOpt}
          />
          </div>
      );
  };
}

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing viewport-height'>
      <ParticleBackground />
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'></h1>
          <p className='lead'></p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              SIGN UP
            </Link>
            <Link to='/login' className='btn btn-light'>
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
