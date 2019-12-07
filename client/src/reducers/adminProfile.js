import {
  GET_ADMINPROFILE,
  ADMINPROFILE_ERROR,
  CLEAR_PROFILE
} from '../actions/types';

const initialState = {
  adminProfile: null,
  adminProfiles: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ADMINPROFILE:
      return {
        ...state,
        adminProfile: payload,
        loading: false
      };
    case ADMINPROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false
      };
    default:
      return state;
  }
}
