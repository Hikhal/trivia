import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MathJax } from 'better-react-mathjax';
import questions from '../questions';
import './Exam.css';

const Exam = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (answerIndex) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(updatedUserAnswers);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigate('/result', { state: { userAnswers: updatedUserAnswers } });
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="exam-container">
      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <div className="question">
        <MathJax>
          <div>{question.question}</div>
        </MathJax>
      </div>
      <ul className="options">
        {question.options.map((option, index) => (
          <li key={index}>
            <MathJax>
              <button onClick={() => handleAnswer(index)}>
                {option}
              </button>
            </MathJax>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exam;
