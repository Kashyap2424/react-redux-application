import { createStore } from "redux";

const reducerFuncation = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };

    case "DECREMENT":
      return { counter: state.counter - 1 };

    case "ADD_COUNT_BY_TEN":
      return { counter: state.counter + action.payload };

    default:
      break;
  }

  return state;
};

const store = createStore(reducerFuncation);

export default store;
