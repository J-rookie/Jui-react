import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';

import Jui from '../src/build';

import './skin.scss';
import Home from './pages/index';
import Grids from './pages/grids';
import HeadTop from './pages/header';
import Switch from './pages/switch';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/grids" component={Grids}/>
    <Route path="/header" component={HeadTop}/>
    <Route path="/switch" component={Switch}/>
  </Router>
  ),document.getElementById('app'))