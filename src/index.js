import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

/*const firebaseConfig = {
  apiKey: "AIzaSyAqFtos0a86NSd5i_OUQuBoD4xQvMypT4A",
  authDomain: "react-58861.firebaseapp.com",
  projectId: "react-58861",
  storageBucket: "react-58861.appspot.com",
  messagingSenderId: "423442116689",
  appId: "1:423442116689:web:5c809bdd7f213247ac8870"
};*/
const firebaseConfig = {
  apiKey: "AIzaSyC8SFyvP26osMKoldrAGP3XhGism9cQaKU",
  authDomain: "react-facu-mar.firebaseapp.com",
  projectId: "react-facu-mar",
  storageBucket: "react-facu-mar.appspot.com",
  messagingSenderId: "14011489321",
  appId: "1:14011489321:web:5024c977ca80d3ce89d038"
};


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
