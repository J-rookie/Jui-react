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
import SearchView from './pages/search';
import CellView from './pages/cell';
import radioView from './pages/radio';
import checkView from './pages/check';
import actionSheetView from './pages/actionSheet';
import ToastView from './pages/toast';
import LayerView from './pages/layer';
import PickerView from './pages/picker';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/grids" component={Grids}/>
    <Route path="/header" component={HeadTop}/>
    <Route path="/switch" component={Switch}/>
    <Route path="/swipe" component={Swipe}/>
    <Route path="/search" component={SearchView}/>
    <Route path="/cell" component={CellView}/>
    <Route path="/radio" component={radioView}/>
    <Route path="/check" component={checkView}/>
    <Route path="/actionSheet" component={actionSheetView}/>
    <Route path="/toast" component={ToastView}/>
    <Route path="/layer" component={LayerView}/>
    <Route path="/picker" component={PickerView}/>
  </Router>
  ),document.getElementById('app'))