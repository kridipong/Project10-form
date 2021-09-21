import { useState } from "react";

const useInput = (validateFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const isValid = validateFunc(enteredValue);
  const hasError = !isValid && isTouched;

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    hasError,
    isValid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
