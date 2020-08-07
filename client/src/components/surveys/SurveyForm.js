// SurveyForm shows a form for a user to add input

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type='text' name='title' component={SurveyField} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form
          // handleSubmit is a function provided by redux-form which is wired in the export statement
          // handleSubmit takes a function which is automatically called when form is submitted
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
