import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loginReduer from "../features/login/loginSlice";

export default configureStore({
  reducer: { 
    counter: counterReducer,
    login: loginReduer,
  },
});
