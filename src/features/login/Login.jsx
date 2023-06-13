import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./loginSlice";

function Login() {
  const user = useSelector((state) => state.login.value);
  const dispatch = useDispatch();
  return (
    <div>
      {!user && <button onClick={() => dispatch(login())}>Log In</button>}
    </div>
  );
}

export default Login;
