import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
     <App />
   </Provider>,
  document.getElementById('root')
);
