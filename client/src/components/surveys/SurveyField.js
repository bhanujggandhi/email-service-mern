import React from 'react';
import { Form } from 'react-bootstrap';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  //This field component is passed into Field component by Redux-form in SUrveyForm component
  //redux-form has provided no. of props to SurveyField component like onChange, onFocus, onBlur, etc.
  //props.input has all these properties.. so we've destructured it
  //meta property has various meta data having error field for form validation
  // console.log(meta);
  return (
    <fieldset>
      <Form.Group>
        <Form.Label htmlFor='TextInput'>{label}</Form.Label>
        <Form.Control id='TextInput' {...input} />
      </Form.Group>
      <Form.Text style={{ color: '#F70000', marginBottom: '20px' }}>
        {touched && error}
      </Form.Text>
    </fieldset>
  );
  //{...input} means we are spreading input object. It is equivalent to onBlur={input.onBlur} and so on.
  //label prop is passed as prop from Field component
};

export default SurveyField;
