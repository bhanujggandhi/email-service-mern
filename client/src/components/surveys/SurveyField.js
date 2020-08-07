import React from 'react';

const SurveyField = ({ input }) => {
  //This field component is passed into Field component by Redux-form in SUrveyForm component
  //redux-form has provided no. of props to SurveyField component like onChange, onFocus, onBlur, etc.
  //props.input has all these properties.. so we've destructured it
  console.log(input);
  return (
    <div>
      <input {...input} />
    </div>
  );
  //{...input} means we are spreading input object. It is equivalent to onBlur={input.onBlur} and so on.
};

export default SurveyField;
