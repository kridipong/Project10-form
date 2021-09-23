import { useState } from "react";

const useInput = (validateFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = (event) => {
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
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};
export default useInput;
