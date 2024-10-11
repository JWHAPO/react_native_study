import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Level {
    userId: string,
    level: number;
  }

const initialState: Level = {
    userId: "",
    level: 0
};

const levelSlice = createSlice({
    name: 'level',
    initialState,
    reducers: {
        setLevel : (state, action) => {
            state.userId = action.payload.userId;
            state.level = action.payload.level;
        },
    }
});

export const { setLevel } = levelSlice.actions;
export default levelSlice.reducer;