import React from 'npm.react/react.js';
import ReactDOM from 'npm.react/react-dom.js';
import Placeholder from './Placeholder.js';
import settings from './settings.js';

const route = window.storefront.route;

ReactDOM.render(
  <Placeholder id={route}/>,
  document.getElementById('root')
);
