import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './data/stores/store';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// agora token
//'NETLESSSDK_YWs9WVRmQ0x5cndWSXNRLWtzNCZub25jZT0xYjg2NGIxMC04ZmY4LTExZWMtOWYyMS02ZDZlMTMyYmI5ZDMmcm9sZT0wJnNpZz1hZDQwYjk0NTIxNzIwODg0ZjRkYzk3MTBhZTliOGIxZTlmODRjZTI4ZmRlNzhhYmNiZjkyMjZhYjkxY2JjNmVh'