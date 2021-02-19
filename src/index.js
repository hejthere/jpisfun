import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


<<<<<<< HEAD
ReactDOM.render(<BrowserRouter>  <React.StrictMode><App /> </React.StrictMode></BrowserRouter>, document.getElementById('root'));
=======
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
>>>>>>> 4f2ba88543d3e770d9bf36bc5ca9f0e8a1ecc5ea
registerServiceWorker();
