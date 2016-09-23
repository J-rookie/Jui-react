import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';

import Jui from '../src/build';

import './skin.css';
import Home from './pages/index';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
  </Router>
  ),document.getElementById('app'))