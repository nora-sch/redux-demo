import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      {count >= 0 ? (
        <div style={{ color: "green", fontSize: "30px" }}>{count}</div>
      ) : (
        <div style={{ color: "red", fontSize: "30px" }}>{count}</div>
      )}
      <div className="btn-section">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button
          onClick={() => dispatch(increment())}
          style={{ marginLeft: "10px" }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
