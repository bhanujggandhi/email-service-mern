// SurveyNew shows SurveyForm and SurveyFormReview

import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

export default class SurveyNew extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { new: true };
  // }
  //Code above and state={object} is equivalent. It is a babel shortcut

  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview />;
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
