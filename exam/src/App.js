import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exam from './components/Exam';
import Result from './components/Result';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element = {<Exam/>} />
        <Route path="/result" element = {<Result/>}/>
      </Routes>
    </div>
  </Router>
);

export default App;