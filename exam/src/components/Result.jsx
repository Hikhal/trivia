import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MathJax } from 'better-react-mathjax';
import questions from '../questions';
import './Result.css';

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

  const incorrectQuestions = questions.filter((question, index) => userAnswers[index] !== question.answer);

  return (
    <div className="result-container">
      <h2>Exam Results</h2>
      <p>You scored {score} out of {questions.length}</p>
      {incorrectQuestions.length > 0 ? (
        <>
          <h3>Review Incorrect Answers</h3>
          <ul className="review-list">
            {incorrectQuestions.map((question, index) => {
              const questionIndex = questions.indexOf(question);
              return (
                <li key={index} className="review-item">
                  <MathJax>
                    <div>{question.question}</div>
                  </MathJax>
                  <ul>
                    {question.options.map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={userAnswers[questionIndex] === optionIndex ? (userAnswers[questionIndex] === question.answer ? 'correct-answer' : 'incorrect-answer') : ''}
                      >
                        <MathJax>
                          <span>{option}</span>
                        </MathJax>
                        {userAnswers[questionIndex] === optionIndex && userAnswers[questionIndex] !== question.answer && (
                          <span> (Your Answer)</span>
                        )}
                        {optionIndex === question.answer && (
                          <span> (Correct Answer)</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Congratulations! You got all the questions correct.</p>
      )}
      <button onClick={handleRestart}>Restart Exam</button>
    </div>
  );
};

export default Result;

