import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from 'pages/App';
import * as serviceWorker from './serviceWorker';
import 'utils/http';
import { HOST } from 'utils/host';
import { BrowserRouter, Route } from 'react-router-dom';

axios.get(`${HOST}/search`, {
  params: {
    keywords: '海阔天空'
  }
}).then(res => {
  console.log(res);
})

const Index = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
)

export default axios;

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
