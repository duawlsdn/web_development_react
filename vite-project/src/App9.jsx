import useTitle from "./script/useTitle";
import './App.css';
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useTitle(`nice ${count}`);

  return (
  <>
    <h1>{count}</h1>
    <br />
    <button onClick={() => setCount(preCount => preCount + 1)}>수행</button>
  </>
  );
}

export default Counter;