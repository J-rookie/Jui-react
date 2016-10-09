import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';

import Jui from '../src/build';

import './skin.scss';
import Home from './pages/index';
import Grids from './pages/grids';
import HeadTop from './pages/header';
import Switch from './pages/switch';
import Swipe from './pages/swipe';
import SearchForm from './pages/search';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/grids" component={Grids}/>
    <Route path="/header" component={HeadTop}/>
    <Route path="/switch" component={Switch}/>
    <Route path="/swipe" component={Swipe}/>
    <Route path="/search" component={SearchForm}/>
  </Router>
  ),document.getElementById('app'))