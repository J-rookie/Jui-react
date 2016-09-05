import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';

import Index from './pages/index/index'

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Index}/>
  </Router>,
document.getElementById('app'))