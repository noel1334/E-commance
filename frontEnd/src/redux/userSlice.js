import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    user: (state, action) => {
        state.user = action.payload
    },
    logout: (state, action) => {
        state.user = null
    }
  },
});

export const {user, logout} = userSlice.actions;
export default userSlice.reducer;
