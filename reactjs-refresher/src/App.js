import React from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the React JS Refresher'},
    {id: 'cg2', text: 'Then proceed to React Native Main Course'},
    {id: 'cg3', text: 'Build a React Native App'},
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
