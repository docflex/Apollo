import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the slice
const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e",
};

// Define the reducer function
const setModeReducer = (state) => {
    state.mode = state.mode === "light" ? "dark" : "light";
};

// Create a slice using createSlice function
export const globalSlice = createSlice({
    name: "global", // Name of the slice
    initialState, // Initial state for the slice
    reducers: {
        setMode: setModeReducer, // Use the defined reducer function
    },
});

// Export the action creators
export const { setMode } = globalSlice.actions;

// Export the reducer function
export default globalSlice.reducer;
