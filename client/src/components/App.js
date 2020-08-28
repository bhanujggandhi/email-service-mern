import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { auth } = this.props;
    console.log(auth);
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route
              path='/'
              exact
              render={() => (!auth ? <Redirect to='/surveys' /> : <Landing />)}
            ></Route>
            <Route path='/surveys' component={Dashboard} exact></Route>
            <Route path='/surveys/new' exact component={SurveyNew}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(App);
