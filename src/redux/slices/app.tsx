import { createSlice } from "@reduxjs/toolkit";


interface AppState {
  theme:"light" | "dark";
}

const initialState: AppState = {
  theme:"light"
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchTheme:(state)=>{
     state.theme = state.theme === 'light' ? 'dark' : 'light'
    }
    
  },
});

export const { switchTheme } = appSlice.actions;
export default appSlice.reducer;