import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style.scss';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, HashHistory } from 'react-router-dom';


ReactDOM.render(<HashHistory basename={process.env.PUBLIC_URL}><App /></HashHistory>, document.getElementById('root'));
registerServiceWorker();
