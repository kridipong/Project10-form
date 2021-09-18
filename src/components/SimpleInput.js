import React, {useState} from 'react';


const SimpleInput = (props) => {


  const [enteredText, setEnteredText] =useState('');


  const onChangeHandler = event => {
   setEnteredText(event.target.value);
  console.log(enteredText);
  }

  const formSubmissionHandler = event =>{
    event.preventDefault();
    console.log(enteredText);

    setEnteredText('');

  }


  return (
    <form onSubmit = {formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange ={onChangeHandler} value = {enteredText} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
