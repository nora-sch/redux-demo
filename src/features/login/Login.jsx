import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./loginSlice";

function Login() {
  const user = useSelector((state) => state.login.value);
  const dispatch = useDispatch();
  return (
    <div>
      {!user && (
        <div style={{display:'flex', flexDirection:'column' , width:'30%', justifyContent:'center', margin:'0 auto'}}>
          <input></input>
          <button onClick={() => dispatch(login())} style={{width:'50%', margin:'10px', alignSelf:'center'}}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default Login;
