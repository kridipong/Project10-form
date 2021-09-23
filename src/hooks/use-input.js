import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action === "BLUR") {
    return { value: action.target.value, isTouched: true };
  }
  if (action === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialInputState;
};

const useInput = (validateFunc) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const onChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const onBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const isValid = validateFunc(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    enteredValue: inputState.value,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
