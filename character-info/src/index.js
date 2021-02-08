import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props
// import singleSpaReact, {SingleSpaContext} from 'single-spa-react';
import singleSpaReact from 'single-spa-react';

window.React = React;

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return (
      <div>This renders when a catastrophic error occurs</div>
    );
  },
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
