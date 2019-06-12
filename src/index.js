import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'picturefill';

export const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
};

render();

