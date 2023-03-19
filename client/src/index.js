import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore,applyMiddleware , compose } from '@reduxjs/toolkit';
import  thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';

const store = configureStore({
    reducer: reducers,
    middleware: [thunk],
  }); 

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
);


// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );