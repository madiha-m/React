import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import userReducer from './features/user';
import themeReducer from './features/theme';
import crudReducer from './features/crud'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    crud: crudReducer,
  }, /* reducer is a property having object containing reducers
        colletion of reducers > reducer hook created by reacted , builtin feature, it contains all reducers

        reducer: takes current state info, previous value of state, and action and return new state value
    */
});

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
