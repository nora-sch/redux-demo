import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name: "login",
    initialState: {
      value: null,
    },
    reducers: {
      login: (state) => {
        // state.value = 'Nora Sumane';
        state.value = {
            firstname: 'Nora',
            lastname: 'Sumane',
         }
      },
      logout: (state) => {
        state.value = null;
      },
    },
  });
  
  export const { login, logout } = loginSlice.actions;
  export default loginSlice.reducer;