import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqFtos0a86NSd5i_OUQuBoD4xQvMypT4A",
  authDomain: "react-58861.firebaseapp.com",
  projectId: "react-58861",
  storageBucket: "react-58861.appspot.com",
  messagingSenderId: "423442116689",
  appId: "1:423442116689:web:5c809bdd7f213247ac8870"
};
/*const firebaseConfig = {
  apiKey: "AIzaSyB_1Swt0xSJ80zoqlfgWt_MjhBeheF4tcY",
  authDomain: "react-facu-final.firebaseapp.com",
  projectId: "react-facu-final",
  storageBucket: "react-facu-final.appspot.com",
  messagingSenderId: "569484485328",
  appId: "1:569484485328:web:dd525ab0c13850ccf334d5"
};*/


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
