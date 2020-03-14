import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { toast } from 'react-toastify'
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './core-style.css'
import './common/js/classy-nav.min.js'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import 'react-toastify/dist/ReactToastify.css'
// import { createStore } from 'redux'
// import configureStore, { history } from "./store";
// export const store = configureStore();
toast.configure()
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
