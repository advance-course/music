import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'pages/App';
import * as serviceWorker from './serviceWorker';
import 'utils/http';
import './index.css';

const Index = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
    <Route path="/music" component={App} />
  </BrowserRouter>
)

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
