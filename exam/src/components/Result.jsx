import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import questions from '../questions';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userAnswers = location.state?.userAnswers || [];

  const score = userAnswers.reduce((total, answer, index) => (
    total + (answer === questions[index].answer ? 1 : 0)
  ), 0);

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Exam Results</h2>
      <p>You scored {score} out of {questions.length}</p>
      <button onClick={handleRestart}>Restart Exam</button>
    </div>
  );
};

export default Result;