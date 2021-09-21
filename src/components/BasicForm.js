import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  //firstname

  const {
    enteredValue: enteredFirstName,
    hasError: firstNameHasError,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  //lastName

  const {
    enteredValue: enteredLastName,
    hasError: lastNameHasError,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  //email

  const {
    enteredValue: enteredEmail,
    hasError: emailHasError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));



  const firstNameClassControl = !firstNameHasError
    ? "form-control"
    : "form-control invalid";

  const lastNameClassControl = !lastNameHasError
    ? "form-control"
    : "form-control invalid";

    
  const emailClassControl = !emailHasError
  ? "form-control"
  : "form-control invalid";


  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredFirstName.trim() === "" || enteredLastName.trim() ==="" || enteredEmail.trim() ==="" || !enteredEmail.includes('@') ) {
      return;
    }
 
    console.log(`${enteredFirstName}  ${enteredLastName} and email address : ${enteredEmail}`);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const formIsValid = !firstNameHasError && !lastNameHasError && !emailHasError;  

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClassControl}>
          <label htmlFor="lastname">First Name</label>
          <input
            type="text"
            id="lastname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && <p>the first name cannot be empty!</p>}
        </div>
        <div className={lastNameClassControl}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />

          {lastNameHasError && <p> Last name cannot be empty!</p>}
        </div>
      </div>
      <div className={emailClassControl}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />

        {emailHasError && <p>please enter valid email address!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
