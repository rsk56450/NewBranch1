import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "FirstSlice",
  initialState: {
    isMenuOpen: false,
    sugesstionList: [],
  },
  reducers: {
    OpenMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setSuggestionList: (state, action) => {
      state.sugesstionList.push(action.payload);
    },
  },
});

export const { OpenMenu, setSuggestionList } = appSlice.actions;

export default appSlice.reducer;
