//BƯỚC 3: CẤU HÌNH ĐỂ SỬ DỤNG STORE VÀ PROVIDER ĐỂ VIẾT ĐƯỢC THƯ VIỆN REDUX
//BƯỚC 4: TẠO ACTION TRONG REDUX
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'; // CẤU HÌNH ĐỂ SỬ DỤNG STORE 
import { Provider } from 'react-redux'; // PROVIDER ĐỂ VIẾT ĐƯỢC THƯ VIỆN REDUX

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
