import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';

import Jui from '../src/build';

import Index from './pages/index';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}/>
  </Router>
  ),document.getElementById('app'))