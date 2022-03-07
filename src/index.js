import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  

// import { createStore } from 'redux';


// //Store -> Globalized State

// //Action Increment [A function that returns an obj]

// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }


// //Reducer -> Describes how the action transforms the state into next state
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }


// let store = createStore(counter);

// //Display it in the console

// store.subscribe(() => console.log(store.getState()))

// //Dispatch -> To execute the action
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());


