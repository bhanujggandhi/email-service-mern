// SurveyFormReview shows users their form inputs for review
// import 'materialize-css/dist/css/materialize.min.css';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { EnvelopeFill } from 'react-bootstrap-icons';

const SurveyFormReview = (props) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <fieldset disabled>
        <Form.Group key={name}>
          <Form.Label htmlFor='TextInput'>{label}</Form.Label>
          <Form.Control id='TextInput' value={props.formValues[name]} />
        </Form.Group>
      </fieldset>
    );
  });

  return (
    <div>
      <h4 style={{ marginTop: '20px' }}>Please confirm your entries</h4>
      {reviewFields}
      <Button variant='warning' onClick={props.onCancel}>
        Back
      </Button>

      <Button
        variant='success'
        onClick={() => props.submitSurvey(props.formValues, props.history)}
        className='float-right'
      >
        <EnvelopeFill style={{ marginRight: '5px' }} />
        Send Survey
      </Button>
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
