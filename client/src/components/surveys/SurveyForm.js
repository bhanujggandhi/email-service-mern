// SurveyForm shows a form for a user to add input

import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
    noValueError: 'Please provide a title for your survey!',
  },
  {
    label: 'Subject Line',
    name: 'subject',
    noValueError: 'A subject is required to send emails :)',
  },
  {
    label: 'Email Body',
    name: 'body',
    noValueError: 'Please provide a body to your survey email!',
  },
  {
    label: 'Recipients List',
    name: 'emails',
    noValueError: 'Please provide atleast one email address!',
  },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          type='text'
          name={name}
          component={SurveyField}
        />
      );
    });
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
          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel
          </Link>
          <button type='submit' className='teal btn-flat right white-text'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
