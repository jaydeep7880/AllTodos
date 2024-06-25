import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Dstore from './Redux dummy data todo/DStore';
import abcdata from './Redux Fetch api todo/RStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Redux dummy data todo
    // <Provider store={Dstore}>
    //     <App />
    // </Provider>
    // Redux dummy data todo

    // Redux Fetch api todo
            <Provider store={abcdata}>
                <App></App>
            </Provider>
    // Redux Fetch api todo

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
