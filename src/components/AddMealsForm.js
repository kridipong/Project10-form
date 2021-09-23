import useInput from "../hooks/use-input";
import useHttp from "../hooks/use-http";

import React from "react";

const isEmptyFunc = (value) => value.trim() !== "";
const isValueZero = (value) => +value !== 0;

const AddMealsForm = (props) => {
  const {
    enteredValue: enteredId,
    hasError: idHasError,
    onChangeHandler: idChangeHandler,
    onBlurHandler: idBlurHandler,
    isValid: idIsValid,
    reset: idReset,
  } = useInput(isEmptyFunc);

  const {
    enteredValue: enteredMeal,
    hasError: mealHasError,
    onChangeHandler: mealChangeHandler,
    onBlurHandler: mealBlurHandler,
    isValid: mealIsValid,
    reset: mealReset,
  } = useInput(isEmptyFunc);

  const {
    enteredValue: enteredDescription,
    hasError: descriptionHasError,
    onChangeHandler: descriptionChangeHandler,
    onBlurHandler: descriptionBlurHandler,
    isValid: descriptionIsValid,
    reset: descriptionReset,
  } = useInput(isEmptyFunc);

  const {
    enteredValue: enteredPrice,
    hasError: priceHasError,
    onChangeHandler: priceChangeHandler,
    onBlurHandler: priceBlurHandler,
    isValid: priceIsValid,
    reset: priceReset,
  } = useInput(isValueZero);

  const { isLoading, error, sendRequest: addMeal } = useHttp();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!idIsValid || !mealIsValid || !descriptionIsValid || !priceIsValid) {
      return;
    }

    const seeData =(data) => {
      console.log(data);
    }

    addMeal({
      url: "https://myreactapp-14003-default-rtdb.asia-southeast1.firebasedatabase.app/availableMeals.json",
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:{id: enteredId, meal: enteredMeal, description: enteredDescription, price: enteredPrice
      }
    },seeData );

    // console.log(
    //   `id: ${enteredId}  meal: ${enteredMeal} description: ${enteredDescription} price: ${enteredPrice}`
    // );

    idReset();
    mealReset();
    descriptionReset();
    priceReset();
  };

  const idClassControl = !idHasError ? "form-control" : "form-control invalid";
  const mealClassControl = !mealHasError
    ? "form-control"
    : "form-control invalid";

  const descriptionClassControl = !descriptionHasError
    ? "form-control"
    : "form-control invalid";

  const priceClassControl = !priceHasError
    ? "form-control"
    : "form-control invalid";

  const formIsValid =
    !idHasError && !mealHasError && !descriptionHasError && !priceHasError;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={idClassControl}>
          <label htmlFor="id">iD</label>
          <input
            type="text"
            id="id"
            onChange={idChangeHandler}
            onBlur={idBlurHandler}
            value={enteredId}
          />
          {idHasError && <p>the input cannot be empty!</p>}
        </div>

        <div className={mealClassControl}>
          <label htmlFor="meal">Meal Name</label>
          <input
            type="text"
            id="meal"
            onChange={mealChangeHandler}
            onBlur={mealBlurHandler}
            value={enteredMeal}
          />
          {mealHasError && <p>the input cannot be empty!</p>}
        </div>
      </div>

      <div className="control-group">
        <div className={descriptionClassControl}>
          <label htmlFor="id">Description</label>
          <input
            type="text"
            id="description"
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
            value={enteredDescription}
          />
          {descriptionHasError && <p>the input cannot be empty!</p>}
        </div>

        <div className={priceClassControl}>
          <label htmlFor="price">Meal Name</label>
          <input
            type="number"
            id="price"
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
            value={enteredPrice}
          />
          {priceHasError && <p>the input cannot be empty!</p>}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      {isLoading && <p> updating value! </p> }
      {error &&  <p> the uploading has error {error} </p> }
    </form>
  );
};

export default AddMealsForm;
