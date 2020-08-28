import React from 'react';
import '../styles/landing.css';

const Landing = () => {
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='.box-layout__title'>FeedBack Service</h1>
        <p>Ever wonder how people are linking your service?</p>
        <a
          className='btn btn-primary'
          style={{ marginRight: '10px', marginBottom: '10px' }}
          href='/auth/google'
        >
          Login with Google
        </a>
        <a
          className='btn btn-dark'
          style={{ marginRight: '10px', marginBottom: '10px' }}
          href='/auth/github'
        >
          Login with Github
        </a>
      </div>
    </div>
  );
};

export default Landing;
