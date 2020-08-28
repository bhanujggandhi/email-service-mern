import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { PlusCircleFill } from 'react-bootstrap-icons';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className='float-right'>
        <Link to='/surveys/new'>
          <PlusCircleFill size={50} color='#C82333' />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
