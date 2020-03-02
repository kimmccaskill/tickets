import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.js';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducers/index';
import { ToastProvider} from 'react-toast-notifications'

const saveToLocalStorage = state => {
  const serializedState = JSON.stringify(state)
  localStorage.setItem('state', serializedState)
}

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem('state')
  if (serializedState === null) return undefined
  return JSON.parse(serializedState)
}

const persistedState = loadFromLocalStorage()
const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()))

const router = (
  <Provider store={store} >
    <BrowserRouter>
      <ToastProvider placement='bottom-right'>
        <App /> 
      </ToastProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
