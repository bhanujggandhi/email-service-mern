// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = (props) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className='yellow darken-3 btn-flat' onClick={props.onCancel}>
        Back
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  //This is the whole state in redux
  // console.log(state);
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps)(SurveyFormReview);