import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../questions';

const Exam = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (answerIndex) => {
    setUserAnswers([...userAnswers, answerIndex]);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigate('/result', { state: { userAnswers } });
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <p>{question.question}</p>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(index)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exam;