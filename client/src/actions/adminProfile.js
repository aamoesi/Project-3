import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_ADMINPROFILE,
  // GET_PROFILES,
  ADMINPROFILE_ERROR
  // UPDATE_PROFILE,
  // CLEAR_PROFILE,
  // ACCOUNT_DELETED,
} from './types';

//Get current users profile
export const getCurrentAdminProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_ADMINPROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ADMINPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all profiles
// export const getAdminProfiles = () => async dispatch => {
//   dispatch({ type: CLEAR_PROFILE });

//   try {
//     const res = await axios.get('/api/adminProfile');

//     dispatch({
//       type: GET_PROFILES,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Get profile by ID
// export const getAdminProfileById = userId => async dispatch => {
//   try {
//     const res = await axios.get(`/api/adminProfile/admin/${userId}`);

//     dispatch({
//       type: GET_PROFILE,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Create or update profile
export const createAdminProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/adminProfile', formData, config);

    dispatch({
      type: GET_ADMINPROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/adminDashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ADMINPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
