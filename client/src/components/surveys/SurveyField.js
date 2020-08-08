import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  //This field component is passed into Field component by Redux-form in SUrveyForm component
  //redux-form has provided no. of props to SurveyField component like onChange, onFocus, onBlur, etc.
  //props.input has all these properties.. so we've destructured it
  //meta property has various meta data having error field for form validation
  // console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className='red-text' style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
  //{...input} means we are spreading input object. It is equivalent to onBlur={input.onBlur} and so on.
  //label prop is passed as prop from Field component
};

export default SurveyField;
