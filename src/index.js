import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.css';
import { BrowserRouter } from "react-router-dom"

import reportWebVitals from './reportWebVitals';

// const getDate = ()=>{
//   const date = new Date();
//   return date.toDateString();
// }
// const greeting = <h1>hello miao current date: { getDate() }</h1>;

ReactDOM.render(
    // <App />, 
    <BrowserRouter> <App /> </BrowserRouter>, 
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
