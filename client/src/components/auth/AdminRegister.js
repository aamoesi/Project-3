import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/adminAuth';
import PropTypes from 'prop-types';
import { REGISTER_FAIL } from '../../actions/types';

// import axios from 'axios';

const AdminRegister = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
      // const newUser = {
      //     name,
      //     email,
      //     password
      // }
      // try {

      //     const config = {
      //         headers: {
      //             'Content-Type': 'application/json'
      //         }
      //     }

      //     const body = JSON.stringify(newUser);

      //     const res = await axios.post('/api/adminUsers', body, config);
      //     console.log(res.data)

      // } catch (err) {
      //     console.error(err.response.data);
      // }
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/adminDashboard' />;
  }

  return (
    <section className="container-form-patient">
      <h1 className='large text-primary'>Patient Registration</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Please Create an Account for your
        Patient
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primaryAdmn' value='Register' />
      </form>
      <p className='my-1 whiteText'>
        Already have an account?{' '}
        <Link to='/AdminLogin' className='signIn'>
          Sign In
        </Link>
      </p>
    </section>
  );
};

AdminRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(AdminRegister);
