import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer, { rootSaga } from './modules';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const sagaMiddle = createSagaMiddleware();

// sagaMiddle.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
