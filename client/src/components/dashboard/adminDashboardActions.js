import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-primaryAdmn1 my-1 whiteText'>
        <i className='fas fa-user-circle text-primary whiteText' /> Edit Patient
        Profile
      </Link>
      <Link
        to='/add-experience'
        className='btn btn-primaryAdmn1 my-1 whiteText'
      >
        <i className='fab fa-black-tie text-primary whiteText' /> Log Patient
        Visits
      </Link>
      <Link to='/add-education' className='btn btn-primaryAdmn1 my-1 whiteText'>
        <i className='fas fa-graduation-cap text-primary whiteText' /> Patient
        Progress
      </Link>
    </div>
  );
};

export default AdminDashboardActions;
