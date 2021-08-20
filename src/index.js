import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import WebFont from 'webfontloader';

ReactDOM.render(
  <Router>
      <Routes />
  </Router>,
  document.getElementById('root'),
  WebFont.load({
    google:{
      families: [ 'Comfortaa' ]
    }
  }),
);