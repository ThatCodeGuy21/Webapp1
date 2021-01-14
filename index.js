import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Final from './Final';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <App />
    <Skills />
    <Experience />
    <Education />
    <Final />
  </div>,
  document.getElementById('root')
);
