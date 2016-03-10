import 'babel-core/polyfill';
import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import Root from './Root';


// Use hash location for Github Pages
// but switch to HTML5 history locally.
//const history = browserHistory();


ReactDOM.render(<Root history={browserHistory} />, document.getElementById('root'));
