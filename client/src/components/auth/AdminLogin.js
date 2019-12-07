import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/adminAuth';
// import axios from 'axios';

const AdminLogin = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({

        email: '',
        password: '',

    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    //Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/adminDashboard' />;
    }



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

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign Into Admin Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>

                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password} onChange={e => onChange(e)} required
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primaryAdmn" value="Login" />
            </form>
            <p className="my-1">
                Don't have an Admin Account? <Link to="/AdminRegister" className='signIn'>Create Account</Link>
            </p>
        </Fragment>
    )
}

login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(AdminLogin);
