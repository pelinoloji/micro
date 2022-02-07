import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 // @ts-ignore
window.renderMicroFrontend = (containerId: string)=>{

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
   document.getElementById(containerId)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
}
 // @ts-ignore
window.unmountDataroom = (containerId: string) => {
  // @ts-ignore
  document.getElementById(containerId) &&
    // @ts-ignore
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
