import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Dashborad = () => {
  return <h2>Dashboard</h2>;
};
const SurveyNew = () => {
  return <h2>Survey New</h2>;
};
const Landing = () => {
  return <h2>Landing</h2>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Landing}></Route>
          <Route path='/surveys' exact component={Dashborad}></Route>
          <Route path='/surveys/new' component={SurveyNew}></Route>
          <Route path=''>404</Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
