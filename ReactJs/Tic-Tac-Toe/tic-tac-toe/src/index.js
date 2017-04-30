import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Layout from './Layout';

import {Router,Route,IndexRoute,hasHistory} from "react-router";

ReactDOM.render(
  <Router history={hasHistory}>
  <Route path="/" component="Layout"></Route>
  </Router>,
  document.getElementById('root')
);
