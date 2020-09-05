import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import HelpPage from './HelpPage';
import WithSpinner from './WithSpinner';

const DasboardWithSpinner = WithSpinner(Dashboard);

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.fetchUser();
    this.setState({ loading: false });
  }

  render() {
    const { auth } = this.props;
    return (
      <BrowserRouter>
        <>
          <Header />
          <div className='container'>
            <Route
              path='/'
              render={() =>
                !auth === false ? <Redirect to='/surveys' /> : <Landing />
              }
              exact
            ></Route>
            <Route
              path='/surveys'
              render={(props) =>
                auth === false ? (
                  <Redirect to='/' />
                ) : (
                  <DasboardWithSpinner auth={auth} {...props} />
                )
              }
              exact
            ></Route>
            <Route
              path='/surveys/new'
              render={() =>
                auth === false ? <Redirect to='/' /> : <SurveyNew />
              }
              exact
            ></Route>
            <Route path='/help' component={HelpPage}></Route>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(App);
