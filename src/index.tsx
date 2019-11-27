import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createApp} from 'utils/dva';
import models from './models';
import App from 'pages/App';
import * as serviceWorker from './serviceWorker';
import 'utils/http';
import './index.css';

const dvaApp = createApp({
  initialState: {},
  models
});

const store = dvaApp.getStore();

const Index = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
