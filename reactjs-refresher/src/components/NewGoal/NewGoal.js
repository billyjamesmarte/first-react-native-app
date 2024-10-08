import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = props => {
  const [enteredText, setEnteredText] = useState('');
  const [courseIdKey, setCourseIdKey] = useState(4);

  const addGoalHandler = event => {
    event.preventDefault();

    const newGoal = {
      id: 'cg'+ courseIdKey,
      text: enteredText
    };

    setEnteredText('');

    props.onAddGoal(newGoal);

    setCourseIdKey(courseIdKey + 1);
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
