import React from 'vtex.react/react.js';
import ReactDOM from 'vtex.react/react-dom.js';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

setTimeout(() => {
  System.import('n1.shelf/async.js', __moduleName)
    .then((async) => {
      async.default();
    });
}, 3000);
