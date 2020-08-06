import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div class='fixed-action-btn'>
        <Link to='/surveys/new' class='btn-floating btn-large red'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
