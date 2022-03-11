import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const addCountByTen = () => {
    dispatch({ type: "ADD_COUNT_BY_TEN", payload: 10 });
  };
  return (
    <div>
      <h1>Counter Application</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addCountByTen}>Add count by 10</button>
    </div>
  );
};

export default App;
