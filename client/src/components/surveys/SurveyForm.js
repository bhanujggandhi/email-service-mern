// SurveyForm shows a form for a user to add input
// import 'materialize-css/dist/css/materialize.min.css';
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import { Button } from 'react-bootstrap';
import { Check2 } from 'react-bootstrap-icons';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
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
        <h4 style={{ marginTop: '20px' }}>Please fill in details</h4>
        <form
          // handleSubmit is a function provided by redux-form which is wired in the export statement
          // handleSubmit takes a function which is automatically called when form is submitted
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to='/surveys' className='btn btn-danger'>
            Cancel
          </Link>
          <Button type='submit' variant='info' className='float-right'>
            Next
            <Check2 />
          </Button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
