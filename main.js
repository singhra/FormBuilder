import React from 'react';

import ReactDOM from 'react-dom';

import {Router} from 'react-router';


import App from './src/js/App';
import routes from './src/js/routes';



ReactDOM.render(
    <Router>{routes}</Router>,
  document.getElementById('app')
  );


