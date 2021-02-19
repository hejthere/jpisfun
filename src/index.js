import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(<BrowserRouter>  <React.StrictMode><App /> </React.StrictMode></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
