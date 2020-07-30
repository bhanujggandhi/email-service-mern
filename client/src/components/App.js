import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashborad = () => {
  return <h2>Dashboard</h2>;
};
const SurveyNew = () => {
  return <h2>Survey New</h2>;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Landing}></Route>
            <Route path='/surveys' exact component={Dashborad}></Route>
            <Route path='/surveys/new' exact component={SurveyNew}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
