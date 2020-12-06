import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Form from './component/Form/Form';
import Display from './component/display/Display';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Form}></Route>
      <Route path="/display" exact component={Display}></Route>
    </Router>
  );
}

export default App;
