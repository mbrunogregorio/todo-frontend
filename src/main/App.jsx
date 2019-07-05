import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Menu from '../template/menu';
import Routes from './routes'
import Todo from '../todo/todo';
import About from '../about/about';


export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
)