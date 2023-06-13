import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name: "login",
    initialState: {
      value: null,
    },
    reducers: {
      login: (state) => {
        state.value = 'Nora Sumane';
      },
      logout: (state) => {
        state.value = '';
      },
    },
  });
  
  export const { login, logout } = loginSlice.actions;
  export default loginSlice.reducer;