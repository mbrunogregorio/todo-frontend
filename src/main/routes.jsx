import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Todo from '../todo/todo';
import About from '../about/about';

export default props => (
    <Router>
        <Route exact path="/" component={Todo} />
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
    </Router>
)
