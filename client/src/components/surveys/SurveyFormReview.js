// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = (props) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{props.formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className='yellow darken-3 white-text btn-flat'
        onClick={props.onCancel}
      >
        Back
      </button>
      <button
        onClick={() => props.submitSurvey(props.formValues, props.history)}
        className='green btn-flat white-text right'
      >
        Send Survey
        <i className='material-icons right'>email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  //This is the whole state in redux
  // console.log(state);
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

//Second argument to connect funtion is mapDispatchToProps, by passing actions object.. it will map all the actions in it to the props
