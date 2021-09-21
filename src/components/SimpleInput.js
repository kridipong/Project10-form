import React, { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredText,
    hasError: nameInputIsInValid,
    inputChangeHandler: onChangeHandler,
    inputBlurHandler: onBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  //-------------------------------------------

  const {
    enteredValue: enteredEmail,
    hasError: emailInputIsInValid,
    inputChangeHandler: onEmailChangeHandler,
    inputBlurHandler: onEmailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    nameInputReset();
    emailReset();
    console.log(`${enteredText}  ${enteredEmail}`);
  };

  let formIsValid = false;

  if (!nameInputIsInValid && !emailInputIsInValid) {
    formIsValid = true;
  }

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          value={enteredText}
        />
        {nameInputIsInValid && <p> The Input cannot be empty </p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">email</label>

        <input
          type="email"
          id="email"
          onChange={onEmailChangeHandler}
          onBlur={onEmailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInValid && <p> please verify the email address again </p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
