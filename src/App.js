import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy, decrementBy } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const loggedIn = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter number: {counter}</h1>
      <input type='number' id='num'></input>
      <br/>
      <button onClick={() => dispatch(increment())}>Increase by 1</button>
      <br/>
      <button onClick={() => dispatch(decrement())}>Decrease by 1</button>
      <br/>
      <button onClick={() => dispatch(incrementBy(parseInt(document.getElementById('num').value)))}>Increase by input</button>
      <br/>
      <button onClick={() => dispatch(decrementBy(parseInt(document.getElementById('num').value)))}>Decrease by input</button>
      <h1>Logged in?: {loggedIn ? 'Yes' : 'No'}</h1>
    </div>
  );
}

export default App;
