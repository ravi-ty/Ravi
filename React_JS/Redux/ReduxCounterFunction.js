import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const ReduxCounterFunction = () => {
  const counter = useSelector(state => state["counter"]);
  const show = useSelector(state => state["showCounter"]);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type:"toggle"});
  }
  const incrementHandler = () => {
    dispatch({type:"increment"});
  }
  const increaseHandler = () => {
    dispatch({type:"increase",value:5});
  }
  const decrementHandler = () => {
    dispatch({type:"decrement"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default ReduxCounterFunction;
