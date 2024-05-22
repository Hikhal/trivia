import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exam from './components/Exam';
import Result from './components/Result';
import { MathJaxContext } from 'better-react-mathjax';

const config = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  svg: {
    fontCache: 'global'
  }
};

const App = () => (
  <MathJaxContext config={config}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Exam />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  </MathJaxContext>
);

export default App;
